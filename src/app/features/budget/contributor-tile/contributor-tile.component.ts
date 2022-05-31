import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IContributorTile} from "./contributor-tile";

@Component({
  selector: 'mocha-contributor-tile',
  templateUrl: './contributor-tile.component.html',
  styleUrls: ['./contributor-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContributorTileComponent {
  @Input() data!: IContributorTile;
}
