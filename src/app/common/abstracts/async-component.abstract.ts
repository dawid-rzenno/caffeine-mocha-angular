import {Directive, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Directive()
export abstract class AsyncComponentAbstract implements OnDestroy {
  protected readonly destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
