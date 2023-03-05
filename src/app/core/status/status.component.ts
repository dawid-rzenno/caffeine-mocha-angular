import {Component} from '@angular/core';
import {StatusService} from "./status.service";
import {Observable} from "rxjs";
import {InstantiatedStatus} from "./common/status-with-id.type";

@Component({
  selector: 'mocha-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  readonly statuses$: Observable<InstantiatedStatus[]> = this.service.statuses$;

  constructor(private service: StatusService) {
  }

  close(statusId: number): void {
    this.service.closeStatusWithId(statusId);
  }
}
