import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContributorControlKey} from "./common/contributor-control.interface";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";
import {NestedFormArrayAbstract} from "../common/nested-form-array.abstract";

@Component({
  selector: 'mocha-contributors-control',
  templateUrl: './contributors-control.component.html',
  styleUrls: ['./contributors-control.component.scss']
})
export class ContributorsControlComponent extends NestedFormArrayAbstract implements OnInit {
  public readonly ControlKey = ContributorControlKey;

  @ViewChildren(MatAccordion) accordions!:  QueryList<MatAccordion>;

  public ngOnInit() {
    this.addFormGroup();
  }

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [ContributorControlKey.ID]: new FormControl(''),
      [ContributorControlKey.Name]: new FormControl('', {validators: [Validators.required]}),
      [ContributorControlKey.Incomes]: new FormArray([]),
      [ContributorControlKey.Allowances]: new FormArray([]),
      [ContributorControlKey.Deductions]: new FormArray([]),
    })
  }

  public onFocus(incomesPanel: MatExpansionPanel, contributorNameInput: HTMLInputElement): void {
    if(!contributorNameInput.value) {
      incomesPanel.open();
    }
  }

  public onSubmit(form: FormGroup, incomesPanel: MatExpansionPanel): void {
    if(form.invalid) {
      incomesPanel.open();
    } else {
      this.newElementInFormArray.emit();
    }
  }
}
