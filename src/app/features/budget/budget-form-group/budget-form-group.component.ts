import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {FormComponentAbstract} from "../../../models/form-component.abstract";
import {BudgetFormGroupKeys} from "./budget-form-group";
import {BudgetService} from "../budget.service";
import {ActivatedRoute} from "@angular/router";
import {IBudget} from "../budget";
import {BudgetDetailsFormGroupComponent} from "../budget-details-form-group/budget-details-form-group.component";

@Component({
  selector: 'mocha-budget-form-group',
  templateUrl: './budget-form-group.component.html',
  styleUrls: ['./budget-form-group.component.scss']
})
export class BudgetFormGroupComponent extends FormComponentAbstract implements OnInit {
  public readonly Keys = BudgetFormGroupKeys
  public budget: IBudget | null = null;
  public header: string = ''

  constructor(protected fb: FormBuilder, private service: BudgetService, private route: ActivatedRoute) {
    super();
  }

  public get details(): FormGroup {
    return this.formGroup.get(BudgetFormGroupKeys.Details) as FormGroup;
  }

  public get outcomes(): FormArray {
    return this.formGroup.get(BudgetFormGroupKeys.Outcomes) as FormArray;
  }

  public get contributors(): FormArray {
    return this.formGroup.get(BudgetFormGroupKeys.Contributors) as FormArray;
  }

  public ngOnInit() {
    this.formGroup = new FormGroup({
      [BudgetFormGroupKeys.Details]: BudgetDetailsFormGroupComponent.attachControlsToFormGroup(new FormGroup({})),
      [BudgetFormGroupKeys.Outcomes]: new FormArray([]),
      [BudgetFormGroupKeys.Contributors]: new FormArray([])
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
