import {ActivatedRoute} from "@angular/router";
import {AsyncComponentAbstract} from "./async-component.abstract";
import {Observable} from "rxjs";
import {StatusService} from "../../../core/status/status.service";

export enum RoutedFormGroupRouteDataKey {
  FormGroup = 'formGroup',
  Header = 'header',
}

export abstract class RoutedFormGroupComponentAbstract<FormGroup> extends AsyncComponentAbstract {
  public readonly header: Observable<string> = this.activatedRoute.snapshot.data[RoutedFormGroupRouteDataKey.Header];
  public readonly formGroup: FormGroup = this.activatedRoute.snapshot.data[RoutedFormGroupRouteDataKey.FormGroup];

  protected constructor(protected activatedRoute: ActivatedRoute, protected override statusService: StatusService) {
    super(statusService);
  }
}
