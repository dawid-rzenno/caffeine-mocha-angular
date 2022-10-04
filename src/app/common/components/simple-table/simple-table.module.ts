import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTableComponent} from "./simple-table.component";
import {MatTableModule} from "@angular/material/table";

const DECLARATIONS = [
  SimpleTableComponent
];

const IMPORTS = [
  CommonModule,
  MatTableModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  exports: [
    ...IMPORTS,
    ...DECLARATIONS,
  ]
})
export class SimpleTableModule {}
