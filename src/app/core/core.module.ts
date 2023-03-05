import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeaderComponent} from "./layout/header/header.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeIconLibraryModule} from "./libraries/font-awesome-icon-library.module";
import {FooterComponent} from './layout/footer/footer.component';
import {MainComponent} from './layout/main/main.component';
import {AuthModule} from "./auth/auth.module";
import {PathSegment} from "../common/constants/path-segment.enum";
import {StatusModule} from "./status/status.module";

const EXPORTED_DECLARATIONS = [
  HeaderComponent,
  FooterComponent,
  MainComponent
];

const DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  HomeComponent,
  NotFoundComponent,
];

const IMPORTS = [
  // ANGULAR
  CommonModule,
  RouterModule,
  // MATERIAL
  MatProgressSpinnerModule,
  MatMenuModule,
  MatButtonModule,
  // FONTAWESOME
  FontAwesomeIconLibraryModule,
  // CORE
  AuthModule,
  StatusModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  exports: EXPORTED_DECLARATIONS
})
export class CoreModule {
  static readonly routes: Routes = [
    {
      path: PathSegment.Home,
      component: HomeComponent
    },
    ...AuthModule.routes,
    {
      path: '',
      pathMatch: 'full',
      redirectTo: `/${PathSegment.Home}`
    },
    {
      path: '**',
      component: NotFoundComponent
    },
  ];
}
