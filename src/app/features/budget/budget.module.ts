import {NgModule} from '@angular/core';
import {BudgetFormComponent} from "./budget-form/budget-form.component";
import {BudgetContributorsControlComponent} from "./budget-contributors-control/budget-contributors-control.component";
import {BudgetComponent} from './budget.component';
import {BudgetService} from "./budget.service";
import {BudgetGeneralControlComponent} from './budget-general-control/budget-general-control.component';
import {BudgetSummaryComponent} from './budget-summary/budget-summary.component';
import {BudgetTableComponent} from './budget-table/budget-table.component';
import {BudgetContributorTileComponent} from './budget-contributor-tile/budget-contributor-tile.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {SimpleTableModule} from "../../common/components/simple-table/simple-table.module";
import {SimpleInputTableModule} from "../../common/components/simple-input-table/simple-input-table.module";
import {FontAwesomeIconLibraryModule} from "../../core/libraries/font-awesome-icon-library.module";
import {BudgetFormService} from "./budget-form/budget-form.service";
import {BackButtonModule} from "../../common/directives/back-button/back-button.module";
import {BudgetRoutingModule} from "./routing/budget-routing.module";

const IMPORTS = [
  // SHARED
  SimpleTableModule,
  SimpleInputTableModule,
  BackButtonModule,
  // MATERIAL
  MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  // FONTAWESOME
  FontAwesomeIconLibraryModule,
  BudgetRoutingModule
];

@NgModule({
  declarations: [
    BudgetComponent,
    BudgetFormComponent,
    BudgetGeneralControlComponent,
    BudgetContributorsControlComponent,
    BudgetSummaryComponent,
    BudgetTableComponent,
    BudgetContributorTileComponent,
  ],
  imports: IMPORTS,
  exports: IMPORTS,
  providers: [
    BudgetService,
    BudgetFormService,
  ]
})
export class BudgetModule {
}
