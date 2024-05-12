import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BudgetContributorTile} from "./common/budget-contributor-tile";

@Component({
  selector: 'mocha-budget-contributor-tile',
  templateUrl: './budget-contributor-tile.component.html',
  styleUrls: ['./budget-contributor-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetContributorTileComponent {
  @Input() budgetContributorTile!: BudgetContributorTile;
}
