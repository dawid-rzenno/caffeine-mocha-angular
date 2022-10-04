import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {FormArray, FormGroup} from "@angular/forms";

@Directive()
export abstract class NestedFormArrayAbstract {
  /** FormArray element control's keys. */
  public abstract readonly ControlKey: {[k: string]: any};

  @Input() formArray!: FormArray;
  @Input() allowEmptyFormArray: boolean = false;

  @Output() newElementInFormArray: EventEmitter<void> = new EventEmitter<void>();

  get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  get isRemoveButtonDisabled() {
    const wouldLastElementBeRemoved = this.forms.length < 2;
    return this.allowEmptyFormArray ? false : wouldLastElementBeRemoved;
  }

  protected abstract get newFormGroup(): FormGroup;

  addFormGroup(): void {
    this.formArray.push(this.newFormGroup);
  }

  removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }

  getFormArray(formGroup: FormGroup, controlName: string): FormArray {
    return formGroup.get(controlName) as FormArray;
  }
}
