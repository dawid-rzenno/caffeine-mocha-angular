import {Directive, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UntypedFormArray, UntypedFormGroup} from "@angular/forms";

@Directive()
export abstract class NestedFormArrayAbstract implements OnInit {
  /** FormArray element control's keys. */
  abstract readonly ControlKey: { [k: string]: any };

  @Input() formArray!: UntypedFormArray;
  @Input() allowEmptyFormArray: boolean = false;

  @Output() newElementInFormArray: EventEmitter<void> = new EventEmitter<void>();

  get forms(): UntypedFormGroup[] {
    return this.formArray.controls as UntypedFormGroup[];
  }

  get isRemoveButtonDisabled() {
    const wouldLastElementBeRemoved = this.forms.length < 2;
    return this.allowEmptyFormArray ? false : wouldLastElementBeRemoved;
  }

  protected abstract get newFormGroup(): UntypedFormGroup;

  ngOnInit() {
    if (!this.formArray.length && !this.allowEmptyFormArray) {
      this.addFormGroup();
    }
  }

  addFormGroup(): void {
    this.formArray.push(this.newFormGroup);
  }

  removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }

  getFormArray(formGroup: UntypedFormGroup, controlName: string): UntypedFormArray {
    return formGroup.get(controlName) as UntypedFormArray;
  }

}
