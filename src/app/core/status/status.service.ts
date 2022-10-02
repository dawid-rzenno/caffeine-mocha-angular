import {Injectable} from '@angular/core';
import {StatusMapKey} from "./common/status-map-key.enum";
import {BehaviorSubject, map, Observable} from "rxjs";
import {StatusMessage} from "./common/status-message.enum";

type LoadingsMap = Map<StatusMapKey, string>;

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private readonly loadingsMap$: BehaviorSubject<LoadingsMap> = new BehaviorSubject<LoadingsMap>(
    new Map<StatusMapKey, string>()
  );

  toggleStatus(key: StatusMapKey, isBeingLoaded: boolean, loadingMessage?: StatusMessage): void {
    const loadingsMap: LoadingsMap = this.loadingsMap$.getValue();
    if (isBeingLoaded) {
      loadingsMap.set(key, loadingMessage ?? StatusMessage.Default);
    } else {
      loadingsMap.delete(key);
    }
    this.loadingsMap$.next(loadingsMap);
  }

  isProcessed$(key: StatusMapKey): Observable<boolean> {
    return this.loadingsMap$.pipe(
      map((loadingsMap: LoadingsMap) => Boolean(loadingsMap.get(key)))
    )
  }
}
