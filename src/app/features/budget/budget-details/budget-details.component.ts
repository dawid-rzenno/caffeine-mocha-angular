import {Component, Input} from '@angular/core';
import {IBudgetFormGroupRawValue} from "../budget-form-group/budget-form-group";

@Component({
  selector: 'mocha-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss']
})
export class BudgetDetailsComponent {
  @Input() budget!: IBudgetFormGroupRawValue

  get json(): string {
    return JSON.stringify(this.budget, null, 4);
  }

  calculate(): void {

  }
}
