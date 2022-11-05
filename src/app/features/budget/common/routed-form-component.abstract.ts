import {UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {AsyncComponentAbstract} from "./async-component.abstract";
import {Observable} from "rxjs";
import {StatusService} from "../../../core/status/status.service";

export enum RoutedFormRouteDataKey {
  FormGroup = 'formGroup',
  Header = 'header',
}

export abstract class RoutedFormComponentAbstract extends AsyncComponentAbstract {
  public abstract readonly FormKey: { [k: string]: string };

  public readonly header: Observable<string> = this.activatedRoute.snapshot.data[RoutedFormRouteDataKey.Header];
  public readonly formGroup: UntypedFormGroup = this.activatedRoute.snapshot.data[RoutedFormRouteDataKey.FormGroup];

  protected constructor(
    protected activatedRoute: ActivatedRoute,
    protected override statusService: StatusService
  ) {
    super(statusService);
  }
}
