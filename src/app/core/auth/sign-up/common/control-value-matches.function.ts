import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function controlValueMatches(controlA: FormControl<string | null>): ValidatorFn {
  return (controlB: AbstractControl): ValidationErrors | null => {
    const valueA = JSON.stringify(controlA.value)
    const valueB = JSON.stringify(controlB.value)
    return valueA === valueB ? null : {valuesDifferent: true};
  }
}
