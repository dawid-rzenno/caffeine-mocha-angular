import {Directive} from "@angular/core";
import {ListComponentAbstract} from "../../abstracts/list-component.abstract";

export interface ISimpleListCompatibleObjectArrayElement {
  id: string;
  name: string;
  value: number;
}

export enum SimpleListCompatibleColumnKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface ISimpleListCompatibleFormArrayElement {
  [SimpleListCompatibleColumnKeys.ID]: string;
  [SimpleListCompatibleColumnKeys.Name]: string;
  [SimpleListCompatibleColumnKeys.Value]: number;
}

export type SimpleListCompatibleElement = ISimpleListCompatibleObjectArrayElement | ISimpleListCompatibleFormArrayElement;

@Directive()
export abstract class SimpleListComponentAbstract
  extends ListComponentAbstract<SimpleListCompatibleElement, typeof SimpleListCompatibleColumnKeys, SimpleListCompatibleColumnKeys> {
  public readonly DisplayedColumnKeys = SimpleListCompatibleColumnKeys;
  public readonly DisplayedColumns = [
    SimpleListCompatibleColumnKeys.ID,
    SimpleListCompatibleColumnKeys.Name,
    SimpleListCompatibleColumnKeys.Value
  ];
}
