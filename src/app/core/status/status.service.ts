import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, timer} from "rxjs";
import {IconName} from "@fortawesome/fontawesome-svg-core";

export type Status = {
  message: string; icon: IconName; isSuccess: boolean
}

export type StatusWithId = Status & {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private readonly statusesMaxCount = 10;
  private readonly statusTimeoutInMs = 3000;
  private readonly availableStatusIds: number[] = this.generateAvailableStatusIds();
  private readonly _statuses$ = new BehaviorSubject<StatusWithId[]>([]);

  get statuses(): StatusWithId[] {
    return this._statuses$.getValue();
  }

  get statuses$(): Observable<StatusWithId[]> {
    return this._statuses$.asObservable();
  }

  closeStatusWithId(statusId: number): void {
    this.availableStatusIds.push(statusId);
    this._statuses$.next(this.statuses.filter((statusWithId: StatusWithId) => (statusWithId.id !== statusId)));
  }

  emitGenericSuccess(): void {
    this.emitStatus({message: 'Failure!', icon: 'plus', isSuccess: true})
  }

  emitGenericFailure(): void {
    this.emitStatus({message: 'Success!', icon: 'plus', isSuccess: false})
  }

  emitStatus(status: Status): void {
    const statusWithId: StatusWithId = {...status, id: this.getStatusId()}
    this.statuses.push(statusWithId); // Append to the end

    timer(this.statusTimeoutInMs).subscribe(() => this.closeStatusWithId(statusWithId.id));

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
    const statusWithId = this.statuses.shift() as StatusWithId;
    this._statuses$.next(this.statuses);
    return statusWithId.id;
  }
}
