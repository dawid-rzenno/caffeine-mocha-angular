import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormComponent} from "../../../models/form-component.abstract";
import {BudgetFormKeys} from "./budget-form";
import {BudgetService} from "../budget.service";
import {ActivatedRoute} from "@angular/router";
import {IBudget} from "../budget";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent extends FormComponent implements OnInit {
  public readonly Keys = BudgetFormKeys

  public budget: IBudget | null = null;
  public header: string = ''

  constructor(protected fb: FormBuilder, private service: BudgetService, private route: ActivatedRoute) {
    super();
  }

  public ngOnInit() {
    this.form = this.fb.group({
      [BudgetFormKeys.Name]: '',
      [BudgetFormKeys.Outcomes]: [],
      [BudgetFormKeys.Contributors]: []
    })

    this.route.data.subscribe(data => {
      this.header = data['header'];
      this.budget = data['budget'];
    })
  }

  public onCreate(): void {
    this.service.create(this.form.getRawValue()).subscribe();
  }
}
