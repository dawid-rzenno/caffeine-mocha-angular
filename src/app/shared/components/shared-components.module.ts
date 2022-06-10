import {NgModule} from '@angular/core';
import {SimpleListComponent} from "./simple-list/simple-list.component";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {SimpleInputListComponent} from "./simple-input-list/simple-input-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

// If a module eagerly imports this module please remove duplicated Material imports of the importing module
const MATERIAL_IMPORTS = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule
]

const COMPONENTS = [
  SimpleListComponent,
  SimpleInputListComponent,
]

const IMPORTS = [
  ReactiveFormsModule,
  CommonModule,
  ...MATERIAL_IMPORTS
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: IMPORTS,
  exports: [
    ...IMPORTS,
    ...COMPONENTS
  ]
})
export class SharedComponentsModule {
}
