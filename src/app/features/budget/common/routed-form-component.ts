import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AsyncComponent } from './async-component';
import { Observable } from 'rxjs';
import { StatusService } from '../../../core/status/status.service';
import { RoutedFormRouteDataKeys } from './routed-form-route-data-keys';

export abstract class RoutedFormComponent extends AsyncComponent {
  public abstract readonly FormKey: { [k: string]: string };

  public readonly header: Observable<string> = this.activatedRoute.snapshot.data[RoutedFormRouteDataKeys.Header];
  public readonly formGroup: UntypedFormGroup = this.activatedRoute.snapshot.data[RoutedFormRouteDataKeys.FormGroup];

  protected constructor(
    protected activatedRoute: ActivatedRoute,
    protected override statusService: StatusService
  ) {
    super(statusService);
  }
}
