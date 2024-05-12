import {Status} from "./status";
import {Observable} from "rxjs";

export type InstantiatedStatus = Status & {
  id: number;
  timer: Observable<number>;
}
