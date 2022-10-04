import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BudgetContributorTileInterface} from "./common/budget-contributor-tile.interface";

@Component({
  selector: 'mocha-budget-contributor-tile',
  templateUrl: './budget-contributor-tile.component.html',
  styleUrls: ['./budget-contributor-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetContributorTileComponent {
  @Input() budgetContributorTile!: BudgetContributorTileInterface;
}
