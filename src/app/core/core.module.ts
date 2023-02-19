import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {HeaderComponent} from "./layout/header/header.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {StatusComponent} from './status/status.component';
import {FontAwesomeIconLibraryModule} from "./libraries/font-awesome-icon-library.module";
import {FooterComponent} from './layout/footer/footer.component';
import {MainComponent} from './layout/main/main.component';

const HOME_PATH = 'home';

// Used in AppModule
export const CORE_ROUTES: Routes = [
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
];

// Used in AppModule
export const ERROR_ROUTES: Routes = [
  {
    path: '**',
    component: NotFoundComponent
  },
]

const DECLARATIONS = [
  HeaderComponent,
];

const IMPORTS = [
  // ANGULAR CORE
  CommonModule,
  // MATERIAL
  MatProgressSpinnerModule,
  MatMenuModule,
  MatButtonModule,
  // FONTAWESOME
  FontAwesomeIconLibraryModule,
]

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    StatusComponent,
    ...DECLARATIONS,
    FooterComponent,
    MainComponent
  ],
  imports: [
    ...IMPORTS,
    RouterModule,
  ],
  exports: [
    ...IMPORTS,
    RouterModule,
    ...DECLARATIONS,
    FooterComponent,
    MainComponent
  ]
})
export class CoreModule {
}
