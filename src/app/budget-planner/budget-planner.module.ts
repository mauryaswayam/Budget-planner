import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Example import, add if needed
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [], // Add your components here
  imports: [
    CommonModule,
    FormsModule,
    DashboardComponent,
    SideNavComponent,

    BudgetPlannerRoutingModule,
  ],
})
export class BudgetPlannerModule {}
