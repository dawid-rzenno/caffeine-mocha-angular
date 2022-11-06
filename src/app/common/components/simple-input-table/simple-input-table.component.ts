import {Component, Input} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NestedFormArrayAbstract} from "../../../features/budget/common/nested-form-array.abstract";
import {SimpleTableRowControlKey} from "../simple-table/common/simple-table-row-control.interface";
import {SimpleInputTableLabel as DefaultLabels} from "./common/simple-input-table-label.enum";

@Component({
  selector: 'mocha-simple-input-table',
  templateUrl: './simple-input-table.component.html',
  styleUrls: ['./simple-input-table.component.scss']
})
export class SimpleInputTableComponent extends NestedFormArrayAbstract {
  public readonly ControlKey = SimpleTableRowControlKey;

  @Input() addButtonLabel: string = DefaultLabels.AddButton;
  @Input() removeButtonLabel: string = DefaultLabels.RemoveButton;
  @Input() nameColumnLabel: string = DefaultLabels.NameColumn;
  @Input() valueColumnLabel: string = DefaultLabels.ValueColumn;

  protected get newFormGroup(): UntypedFormGroup {
    return new UntypedFormGroup({
      [SimpleTableRowControlKey.ID]: new UntypedFormControl(null),
      [SimpleTableRowControlKey.Name]: new UntypedFormControl('', {validators: [Validators.required]}),
      [SimpleTableRowControlKey.Value]: new UntypedFormControl(0, {validators: [Validators.required]})
    })
  }
}
