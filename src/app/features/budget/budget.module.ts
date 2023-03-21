import {NgModule} from '@angular/core';
import {BudgetFormGroupComponent} from "./budget-form-group/budget-form-group.component";
import {
  BudgetContributorsFormArrayComponent
} from "./budget-contributors-form-array/budget-contributors-form-array.component";
import {BudgetComponent} from './budget.component';
import {BudgetService} from "./budget.service";
import {BudgetDetailsFormGroupComponent} from './budget-details-form-group/budget-details-form-group.component';
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
import {BudgetFormService} from "./budget-form-group/budget-form.service";
import {BackButtonModule} from "../../common/directives/back-button/back-button.module";
import {BudgetRoutingModule} from "./routing/budget-routing.module";
import {MatTooltipModule} from "@angular/material/tooltip";

const DECLARATIONS = [
  BudgetComponent,
  BudgetFormGroupComponent,
  BudgetDetailsFormGroupComponent,
  BudgetContributorsFormArrayComponent,
  BudgetSummaryComponent,
  BudgetTableComponent,
  BudgetContributorTileComponent,
];

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
  MatTooltipModule,
  // FONTAWESOME
  FontAwesomeIconLibraryModule,
  // BUDGET
  BudgetRoutingModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [
    BudgetService,
    BudgetFormService,
  ]
})
export class BudgetModule {
}
