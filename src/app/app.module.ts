import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAllAppliedVaccinationPerBranchComponent } from './list-all-applied-vaccination-per-branch/list-all-applied-vaccination-per-branch.component';
import { ListAllAppliedVaccinationPerPeriodComponent } from './list-all-applied-vaccination-per-period/list-all-applied-vaccination-per-period.component';
import { ListAllAvailableTimePerBranchComponent } from './list-all-available-time-per-branch/list-all-available-time-per-branch.component';
import { ListAllAvailableVaccinesPerBranchComponent } from './list-all-available-vaccines-per-branch/list-all-available-vaccines-per-branch.component';
import { ListAllBranchesComponent } from './list-all-branches/list-all-branches.component';
import { ShowAllConfirmedVaccinationComponent } from './show-all-confirmed-vaccination/show-all-confirmed-vaccination.component';
import { FormsModule } from '@angular/forms';
import { ScehduleVaccinationComponent } from './scehdule-vaccination/scehdule-vaccination.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllAppliedVaccinationPerBranchComponent,
    ListAllAppliedVaccinationPerPeriodComponent,
    ListAllAvailableTimePerBranchComponent,
    ListAllAvailableVaccinesPerBranchComponent,
    ListAllBranchesComponent,
    ShowAllConfirmedVaccinationComponent,
    ScehduleVaccinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
