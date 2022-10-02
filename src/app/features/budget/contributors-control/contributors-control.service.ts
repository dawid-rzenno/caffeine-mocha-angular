import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContributorControlKey} from "./common/contributor-control.interface";
import {ContributorInterface} from "./common/contributor.interface";
import {SimpleInputTableService} from "../../../shared/components/simple-input-table/simple-input-table.service";
import {
    SimpleTableRowControlKey
} from "../../../shared/components/simple-table/common/simple-table-row-control.interface";

@Injectable({
  providedIn: 'root'
})
export class ContributorsControlService {
  public static attachControlsToFormArrays(
    formArray: FormArray,
    contributors: ContributorInterface[],
  ): FormArray {
    contributors.forEach((contributor: ContributorInterface) => {
      const incomesFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
        new FormArray([]),
        contributor.incomes
      );

      const allowancesFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
        new FormArray([]),
        contributor.allowances
      );

      const deductionsFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
        new FormArray([]),
        contributor.deductions
      );

      formArray.push(
        new FormGroup({
          [SimpleTableRowControlKey.ID]: new FormControl(contributor.id ?? null),
          [SimpleTableRowControlKey.Name]: new FormControl(
            contributor.name ?? '',
            {validators: [Validators.required]}
          ),
          [ContributorControlKey.Incomes]: incomesFormArray,
          [ContributorControlKey.Allowances]: allowancesFormArray,
          [ContributorControlKey.Deductions]: deductionsFormArray
        })
      );
    })

    return formArray;
  }
}
