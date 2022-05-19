import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {AbstractControl} from "@angular/forms";
import {FormComponentAbstract} from "../../../models/form-component.abstract";

/** Abstract of a form control (within parent form) that can create or remove items from its array value */
@Directive()
export abstract class ListFormControlAbstract<ItemModel> extends FormComponentAbstract {
  @Input() public control!: AbstractControl;
  @Output() public entryAdded: EventEmitter<null> = new EventEmitter<null>()
  @Output() public entryRemoved: EventEmitter<null> = new EventEmitter<null>()

  protected lastIndexUsed = 0

  public get values(): ItemModel[] {
    const controlArrayValue = this.control?.value;
    return controlArrayValue ? controlArrayValue : []
  }

  public onAdd(): void {
    this.control?.setValue(
      [...this.values, {...this.values, id: this.lastIndexUsed}]
    )

    this.lastIndexUsed += 1
    this.entryAdded.emit(null)
  }

  public onRemove(id: string): void {
    this.control?.setValue(
      this.values.filter(
        (outcome: ItemModel) => ({...{id: undefined} /* <- linter suppression */ , ...outcome}['id'] !== id)
      )
    )

    this.entryRemoved.emit(null)
  }
}
