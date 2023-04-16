import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BudgetContributorSummary} from "../budget-summary/budget-summary.model";

@Component({
  selector: 'mocha-budget-contributor-tile',
  templateUrl: './budget-contributor-tile.component.html',
  styleUrls: ['./budget-contributor-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetContributorTileComponent {
  @Input() budgetContributorTile!: BudgetContributorSummary;
}
