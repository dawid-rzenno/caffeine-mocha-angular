import {Directive, EventEmitter, OnDestroy} from "@angular/core";
import {StatusMapKeys} from "src/app/core/status/common/status-map-keys";
import {StatusService} from "../../../core/status/status.service";

@Directive()
export abstract class AsyncComponent implements OnDestroy {
  protected readonly destroy$: EventEmitter<void> = new EventEmitter<void>();
  public readonly StatusMapKey = StatusMapKeys;

  protected constructor(protected statusService: StatusService) {}

  public ngOnDestroy(): void {
    this.destroy$.emit();
  }
}
