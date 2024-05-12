import {Component, Input} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NestedFormArrayComponent} from "../../../features/budget/common/nested-form-array-component";
import {SimpleInputTableLabels as DefaultLabels} from "./common/simple-input-table-labels";
import { SimpleTableRowControlKeys } from "../simple-table/common/simple-table-row-control-keys";

@Component({
  selector: 'mocha-simple-input-table',
  templateUrl: './simple-input-table.component.html',
  styleUrls: ['./simple-input-table.component.scss']
})
export class SimpleInputTableComponent extends NestedFormArrayComponent {
  public readonly ControlKey = SimpleTableRowControlKeys;

  @Input() addButtonLabel: string = DefaultLabels.AddButton;
  @Input() removeButtonLabel: string = DefaultLabels.RemoveButton;
  @Input() nameColumnLabel: string = DefaultLabels.NameColumn;
  @Input() valueColumnLabel: string = DefaultLabels.ValueColumn;

  protected get newFormGroup(): UntypedFormGroup {
    return new UntypedFormGroup({
      [SimpleTableRowControlKeys.ID]: new UntypedFormControl(null),
      [SimpleTableRowControlKeys.Name]: new UntypedFormControl('', {validators: [Validators.required]}),
      [SimpleTableRowControlKeys.Value]: new UntypedFormControl(0, {validators: [Validators.required]})
    })
  }
}
