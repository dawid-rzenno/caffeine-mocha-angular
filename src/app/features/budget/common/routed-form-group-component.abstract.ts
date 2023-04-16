import {AsyncComponentAbstract} from "../../../common/abstracts/async-component.abstract";
import {ActivatedRouteSnapshot} from "@angular/router";

export abstract class RoutedFormGroupComponentAbstract<FormGroup, FormGroupRouteData> extends AsyncComponentAbstract {
  readonly abstract formGroup: FormGroup;

  protected constructor(protected activatedRouteSnapshot: ActivatedRouteSnapshot, protected formGroupRouteDataKey: string) {
    super();
  }

  protected getFormGroupRouteData(): FormGroupRouteData {
    return this.activatedRouteSnapshot.data[this.formGroupRouteDataKey];
  }

  protected abstract createFormGroup(formGroupRouteData?: FormGroupRouteData): FormGroup;
}
