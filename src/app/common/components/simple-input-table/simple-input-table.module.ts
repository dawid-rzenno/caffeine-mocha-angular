import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleInputTableComponent} from "./simple-input-table.component";
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";

const DECLARATIONS = [
  SimpleInputTableComponent
];

const IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    IMPORTS,
  ],
  exports: [
    ...IMPORTS,
    ...DECLARATIONS,
  ]
})
export class SimpleInputTableModule {}
