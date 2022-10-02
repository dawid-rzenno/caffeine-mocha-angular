import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleInputTableComponent} from "./simple-input-table.component";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

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
