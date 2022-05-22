import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContributorFormArrayElementKeys} from "./contributors-form-array";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";
import {InnerFormArray} from "../abstracts/inner-form-array.abstract";

@Component({
  selector: 'mocha-contributors-form-array',
  templateUrl: './contributors-form-array.component.html',
  styleUrls: ['./contributors-form-array.component.scss']
})
export class ContributorsFormArrayComponent extends InnerFormArray implements OnInit {
  public readonly Keys = ContributorFormArrayElementKeys;

  @ViewChildren(MatAccordion) accordions!:  QueryList<MatAccordion>;

  public ngOnInit() {
    this.addFormGroup();
  }

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [ContributorFormArrayElementKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [ContributorFormArrayElementKeys.Incomes]: new FormArray([]),
      [ContributorFormArrayElementKeys.Allowances]: new FormArray([]),
      [ContributorFormArrayElementKeys.Deductions]: new FormArray([]),
    })
  }

  onFocus(incomesPanel: MatExpansionPanel, contributorNameInput: HTMLInputElement) {
    if(!contributorNameInput.value) {
      incomesPanel.open();
    }
  }

  onSubmit(form: FormGroup, incomesPanel: MatExpansionPanel) {
    if(form.invalid) {
      incomesPanel.open();
    } else {
      this.formArrayElementSubmission.emit(null);
    }
  }
}
