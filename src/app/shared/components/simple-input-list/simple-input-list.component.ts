import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InnerFormArray} from "../../../features/budget/abstracts/inner-form-array.abstract";
import {SimpleListCompatibleColumnKeys} from "../simple-list/simple-list";

@Component({
  selector: 'mocha-simple-input-list',
  templateUrl: './simple-input-list.component.html',
  styleUrls: ['./simple-input-list.component.scss']
})
export class SimpleInputListComponent extends InnerFormArray implements OnInit {
  public readonly Keys = SimpleListCompatibleColumnKeys;

  @Input() addButtonLabel: string = '+ Add a new element';
  @Input() removeButtonLabel: string = 'Remove';
  @Input() nameColumnLabel: string = 'Name';
  @Input() valueColumnLabel: string = 'Value (PLN)';

  public ngOnInit() {
    this.addFormGroup();
  }

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [SimpleListCompatibleColumnKeys.ID]: new FormControl(null),
      [SimpleListCompatibleColumnKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [SimpleListCompatibleColumnKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    })
  }
}
