import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BudgetFormKeys} from "../budget-form.component";
import {FormComponent} from "../../models/form-component.abstract";

export enum OutcomeFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IOutcomeForm {
  [OutcomeFormKeys.ID]: string;
  [OutcomeFormKeys.Name]: string;
  [OutcomeFormKeys.Value]: number;
}

@Component({
  selector: 'mocha-outcomes-form',
  templateUrl: './outcomes-form.component.html',
  styleUrls: ['./outcomes-form.component.scss']
})
export class OutcomesFormComponent extends FormComponent implements OnInit {
  @Input() public budgetForm!: FormGroup;

  public totalValue = 0;

  public readonly Keys = OutcomeFormKeys;

  private lastIndexUsed = 0;

  get outcomes(): IOutcomeForm[] {
    const value = this.budgetForm?.get(BudgetFormKeys.Outcomes)?.value;
    return value ? value : []
  }

  private calculateTotalValue(): number {
    let total = 0;
    this.outcomes.forEach(outcome => {
      total = total + outcome[OutcomeFormKeys.Value]
    })
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [OutcomeFormKeys.Name]: 'Testing',
      [OutcomeFormKeys.Value]: 100
    })
  }

  onSubmit() {
    const value = this.form.getRawValue()
    const control = this.budgetForm?.get(BudgetFormKeys.Outcomes)

    control?.setValue(
      [...this.outcomes, {...value, id: this.lastIndexUsed}]
    )

    this.totalValue = this.calculateTotalValue()
    this.lastIndexUsed += 1
  }

  ngOnInit(): void {
  }

  onRemove(id: string) {
    const control = this.budgetForm?.get(BudgetFormKeys.Outcomes)

    control?.setValue(
      this.outcomes.filter(outcome => outcome[OutcomeFormKeys.ID] !== id)
    )

    this.totalValue = this.calculateTotalValue()
  }
}
