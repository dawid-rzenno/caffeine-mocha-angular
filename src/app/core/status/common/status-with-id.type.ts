import {Status} from "./status.type";
import {Observable} from "rxjs";

export type InstantiatedStatus = Status & {
  id: number;
  timer: Observable<number>;
}
