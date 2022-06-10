import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {FormComponentAbstract} from "../../../shared/models/form-component.abstract";
import {BudgetFormGroupKeys, IBudget} from "./budget-form-group";
import {BudgetService} from "../budget.service";
import {ActivatedRoute} from "@angular/router";
import {BudgetDetailsFormGroupComponent} from "../budget-details-form-group/budget-details-form-group.component";
import {finalize, takeUntil} from "rxjs";

@Component({
  selector: 'mocha-budget-form-group',
  templateUrl: './budget-form-group.component.html',
  styleUrls: ['./budget-form-group.component.scss']
})
export class BudgetFormGroupComponent extends FormComponentAbstract implements OnInit, OnDestroy {
  public readonly Keys = BudgetFormGroupKeys
  public budget: IBudget | null = null;
  public header: string = ''
  public loading: boolean = false;

  private destroy$: EventEmitter<any> = new EventEmitter<any>();

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

  public ngOnDestroy(): void {
    this.destroy$.emit();
  }

  public onSave(): void {
    this.loading = true;
    this.service.create(
      this.formGroup.getRawValue()
    ).pipe(
      takeUntil(this.destroy$),
      finalize(() => this.loading = false)
    ).subscribe();
  }
}
