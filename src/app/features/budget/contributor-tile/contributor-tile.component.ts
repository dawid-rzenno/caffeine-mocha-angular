import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ContributorTileInterface} from "./common/contributor-tile.interface";

@Component({
  selector: 'mocha-contributor-tile',
  templateUrl: './contributor-tile.component.html',
  styleUrls: ['./contributor-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContributorTileComponent {
  @Input() data!: ContributorTileInterface;
}
