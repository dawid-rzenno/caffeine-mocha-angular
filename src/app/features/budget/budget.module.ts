import {NgModule} from '@angular/core';
import {BudgetFormComponent} from "./budget-form/budget-form.component";
import {ContributorsControlComponent} from "./contributors-control/contributors-control.component";
import {BudgetComponent} from './budget.component';
import {RouterModule} from "@angular/router";
import {BudgetService} from "./budget.service";
import {BudgetDetailsControlComponent} from './budget-details-control/budget-details-control.component';
import {BudgetInspectionComponent} from './budget-inspection/budget-inspection.component';
import {BudgetTableComponent} from './budget-table/budget-table.component';
import {ContributorTileComponent} from './contributor-tile/contributor-tile.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {BudgetFormResolver} from "./budget-form.resolver";
import {BudgetsResolver} from "./budgets.resolver";
import {BUDGET_ROUTES} from "./budget-routes.const";
import {SimpleTableModule} from "../../shared/components/simple-table/simple-table.module";
import {SimpleInputTableModule} from "../../shared/components/simple-input-table/simple-input-table.module";
import {FontAwesomeIconLibraryModule} from "../../libraries/font-awesome-icon-library.module";
import {BudgetFormService} from "./budget-form/budget-form.service";
import {BackButtonModule} from "../../shared/directives/back-button/back-button.module";

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
  FontAwesomeIconLibraryModule
];

@NgModule({
  declarations: [
    BudgetComponent,
    BudgetFormComponent,
    BudgetDetailsControlComponent,
    ContributorsControlComponent,
    BudgetInspectionComponent,
    BudgetTableComponent,
    ContributorTileComponent,
  ],
  imports: [
    ...IMPORTS,
    RouterModule.forChild(BUDGET_ROUTES),
  ],
  exports: [
    ...IMPORTS,
    RouterModule,
  ],
  providers: [
    BudgetService,
    BudgetFormService,
    BudgetsResolver,
    BudgetFormResolver,
  ]
})
export class BudgetModule {
}
