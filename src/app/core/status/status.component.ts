import {Component} from '@angular/core';
import {StatusService, StatusWithId} from "./status.service";
import {Observable} from "rxjs";

@Component({
  selector: 'mocha-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  readonly statuses$: Observable<StatusWithId[]> = this.statusService.statuses$;

  constructor(private statusService: StatusService) {
  }

  close(statusId: number): void {
    this.statusService.closeStatusWithId(statusId);
  }
}
