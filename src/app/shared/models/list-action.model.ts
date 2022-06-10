import {ThemePalette} from "@angular/material/core";

export interface IListAction {
  label: string;
  callback: any;
}

export interface IListButtonAction extends IListAction {
  type: string;
  color: ThemePalette
}
