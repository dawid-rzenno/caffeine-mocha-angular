import {Directive, EventEmitter, OnDestroy} from "@angular/core";
import {StatusMapKey} from "src/app/core/status/common/status-map-key.enum";
import {StatusService} from "../../../core/status/status.service";

@Directive()
export abstract class AsyncComponentAbstract implements OnDestroy {
  protected readonly destroy$: EventEmitter<void> = new EventEmitter<void>();
  public readonly StatusMapKey = StatusMapKey;

  protected constructor(protected statusService: StatusService) {}

  public ngOnDestroy(): void {
    this.destroy$.emit();
  }
}
