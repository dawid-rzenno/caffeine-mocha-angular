import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusComponent} from "./status.component";
import {StatusInterceptor} from "./status.interceptor";
import {StatusService} from "./status.service";
import {FontAwesomeIconLibraryModule} from "../libraries/font-awesome-icon-library.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

const EXPORTED_DECLARATIONS = [
  StatusComponent
];

const IMPORTS = [
  // ANGULAR
  CommonModule,
  // FONTAWESOME
  FontAwesomeIconLibraryModule,
];

@NgModule({
  declarations: EXPORTED_DECLARATIONS,
  imports: IMPORTS,
  exports: EXPORTED_DECLARATIONS,
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: StatusInterceptor, multi: true},
    StatusService
  ],
})
export class StatusModule {
}
