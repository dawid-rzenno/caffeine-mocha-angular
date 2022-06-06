import { Component } from '@angular/core';
import {APP_BAR_ITEMS} from "./app-bar";

@Component({
  selector: 'mocha-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  public readonly AppBarItems = APP_BAR_ITEMS;
}
