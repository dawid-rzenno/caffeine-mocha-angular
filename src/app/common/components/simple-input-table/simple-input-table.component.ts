import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [SimpleTableRowControlKey.ID]: new FormControl(null),
      [SimpleTableRowControlKey.Name]: new FormControl('', {validators: [Validators.required]}),
      [SimpleTableRowControlKey.Value]: new FormControl(0, {validators: [Validators.required]})
    })
  }
}
