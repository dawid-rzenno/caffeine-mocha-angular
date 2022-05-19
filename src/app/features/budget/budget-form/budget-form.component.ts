import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {FormComponentAbstract} from "../../../models/form-component.abstract";
import {BudgetFormKeys} from "./budget-form";
import {BudgetService} from "../budget.service";
import {ActivatedRoute} from "@angular/router";
import {IBudget} from "../budget";
import {BudgetDetailsFormGroupComponent} from "../budget-details-form/budget-details-form-group.component";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent extends FormComponentAbstract implements OnInit {
  public readonly Keys = BudgetFormKeys
  public budget: IBudget | null = null;
  public header: string = ''

  constructor(protected fb: FormBuilder, private service: BudgetService, private route: ActivatedRoute) {
    super();
  }

  public get details(): FormGroup {
    return this.formGroup.get(BudgetFormKeys.Details) as FormGroup;
  }

  public get outcomes(): FormArray {
    return this.formGroup.get(BudgetFormKeys.Outcomes) as FormArray;
  }

  public get contributors(): FormArray {
    return this.formGroup.get(BudgetFormKeys.Contributors) as FormArray;
  }

  public ngOnInit() {
    this.formGroup = new FormGroup({
      [BudgetFormKeys.Details]: BudgetDetailsFormGroupComponent.attachControlsToFormGroup(new FormGroup({})),
      [BudgetFormKeys.Outcomes]: new FormArray([]),
      [BudgetFormKeys.Contributors]: new FormArray([])
    })

    this.route.data.subscribe(data => {
      this.header = data['header'];
      this.budget = data['budget'];
    })
  }

  public onCreate(): void {
    this.service.create(this.formGroup.getRawValue()).subscribe();
  }
}
