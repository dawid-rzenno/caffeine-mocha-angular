import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormComponent} from "../models/form-component.abstract";

export enum BudgetFormKeys {
  Name = 'Name',
  Outcomes = 'Outcomes',
  Contributors = 'Contributors'
}

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent extends FormComponent implements OnInit {
  public readonly Keys = BudgetFormKeys

  constructor(protected fb: FormBuilder) {
    super();
    this.form = fb.group({
      [BudgetFormKeys.Name]: '',
      [BudgetFormKeys.Outcomes]: [],
      [BudgetFormKeys.Contributors]: []
    })
  }

  ngOnInit(): void {
  }

}
