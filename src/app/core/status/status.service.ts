import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, take, timer} from "rxjs";
import {Status} from "./common/status";
import {InstantiatedStatus} from "./common/instantiated-status";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private readonly statusesMaxCount = 10;
  private readonly statusTimeoutInMs = 5 * 1000;
  private readonly availableStatusIds: number[] = this.generateAvailableStatusIds();
  private readonly _statuses$ = new BehaviorSubject<InstantiatedStatus[]>([]);

  get statuses(): InstantiatedStatus[] {
    return this._statuses$.getValue();
  }

  get statuses$(): Observable<InstantiatedStatus[]> {
    return this._statuses$.asObservable();
  }

  closeStatusWithId(statusId: number): void {
    this.availableStatusIds.push(statusId);
    this._statuses$.next(this.statuses.filter((statusWithId: InstantiatedStatus) => (statusWithId.id !== statusId)));
  }

  emitSuccessMessage(message: string = 'Failure!'): void {
    this.emitStatus({message, icon: 'plus', isSuccess: true})
  }

  emitFailureMessage(message: string = 'Success!'): void {
    this.emitStatus({message, icon: 'close', isSuccess: false})
  }

  createStatusTimer(): Observable<number> {
    const intervalInMs = 1000;
    const lastsInSeconds = this.statusTimeoutInMs / intervalInMs;

    return timer(0, intervalInMs).pipe(
      take(lastsInSeconds),
      map((secondsElapsed: number) => lastsInSeconds - secondsElapsed),
    )
  }

  emitStatus(status: Status): void {
    const instantiatedStatus: InstantiatedStatus = {
      ...status,
      id: this.getStatusId(),
      timer: this.createStatusTimer()
    }
    this.statuses.push(instantiatedStatus); // Append to the end

    timer(this.statusTimeoutInMs).subscribe(() => this.closeStatusWithId(instantiatedStatus.id));

    this._statuses$.next(this.statuses);
  }

  private generateAvailableStatusIds(): number[] {
    return [...Array(this.statusesMaxCount).keys()];
  }

  private getStatusId(): number {
    const availableStatusId: number | undefined = this.availableStatusIds.shift();
    if (availableStatusId !== undefined) {
      return availableStatusId;
    }

    // Recycle id from the oldest status - no available ids means all of them are assigned
    const statusWithId = this.statuses.shift() as InstantiatedStatus;
    this._statuses$.next(this.statuses);
    return statusWithId.id;
  }
}
