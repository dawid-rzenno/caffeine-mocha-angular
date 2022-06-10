import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AppBarComponent} from "./layout/app-bar/app-bar.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

const HOME_PATH = 'home';

// Used in AppModule
export const ROUTES: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: HOME_PATH,
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${HOME_PATH}`
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

const MATERIAL_IMPORTS = [
  MatProgressSpinnerModule,
  MatMenuModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    ...MATERIAL_IMPORTS
  ],
  exports: [
    RouterModule,
    AppBarComponent
  ]
})
export class CoreModule {}
