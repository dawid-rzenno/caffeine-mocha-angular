import {Component, Input} from '@angular/core';
import {SimpleListCompatibleElement, SimpleListComponentAbstract} from "./simple-list";

@Component({
  selector: 'mocha-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent extends SimpleListComponentAbstract {
  @Input() public override dataSource: SimpleListCompatibleElement[] = [];
}
