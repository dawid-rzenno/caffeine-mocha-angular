import {FormComponentAbstract} from "../../../models/form-component.abstract";
import {Directive} from "@angular/core";
import {FormGroup} from "@angular/forms";

/** Abstract of a form control (within parent form) that can create or remove items from its array value */
@Directive()
export abstract class ArrayFormControlChildAbstract<ItemModel> extends FormComponentAbstract {
  abstract readonly NameInsideParentForm: string;
  abstract parentForm: FormGroup;
  protected afterAddCallback: any = () => {
  };
  protected afterRemoveCallback: any = () => {
  };

  protected lastIndexUsed = 0

  public get array(): ItemModel[] {
    const value = this.parentForm?.get(this.NameInsideParentForm)?.value;
    return value ? value : []
  }

  public onAdd(): void {
    const value = this.formGroup.getRawValue()
    const control = this.parentForm?.get(this.NameInsideParentForm)

    control?.setValue(
      [...this.array, {...value, id: this.lastIndexUsed}]
    )

    this.formGroup.reset()
    this.lastIndexUsed += 1

    this.afterAddCallback()
  }

  public onRemove(id: string): void {
    const control = this.parentForm?.get(this.NameInsideParentForm);

    control?.setValue(
      this.array.filter((outcome: ItemModel) => ({...{id: undefined}, ...outcome}['id'] !== id))
    )

    this.afterRemoveCallback();
  }
}
