import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {IncomeFormArrayElementKeys} from "../incomes-form-array/incomes-form-array";

@Component({
  selector: 'mocha-allowances-form-array',
  templateUrl: './allowances-form-array.component.html',
  styleUrls: ['./allowances-form-array.component.scss']
})
export class AllowancesFormArrayComponent implements OnInit {
  public readonly Keys = IncomeFormArrayElementKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public ngOnInit() {
    this.addFormGroup();
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [IncomeFormArrayElementKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [IncomeFormArrayElementKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }
}
