import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListAllBranchesComponent} from './list-all-branches/list-all-branches.component';
import {ListAllAppliedVaccinationPerPeriodComponent} from './list-all-applied-vaccination-per-period/list-all-applied-vaccination-per-period.component';
import {ShowAllConfirmedVaccinationComponent} from './show-all-confirmed-vaccination/show-all-confirmed-vaccination.component';
import {ListAllAvailableVaccinesPerBranchComponent} from './list-all-available-vaccines-per-branch/list-all-available-vaccines-per-branch.component';
import {ListAllAvailableTimePerBranchComponent} from './list-all-available-time-per-branch/list-all-available-time-per-branch.component';
import {ListAllAppliedVaccinationPerBranchComponent} from './list-all-applied-vaccination-per-branch/list-all-applied-vaccination-per-branch.component';
import {ScehduleVaccinationComponent} from './scehdule-vaccination/scehdule-vaccination.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'allBranches', component: ListAllBranchesComponent},
  {path: 'appliedVaccinePerPeroid', component: ListAllAppliedVaccinationPerPeriodComponent},
  {path: 'allConfirmedVaccination', component: ShowAllConfirmedVaccinationComponent},
  {path: 'listAvailableVaccinesBranch/:id', component: ListAllAvailableVaccinesPerBranchComponent},
  {path: 'listAvailableTimesBranch/:id', component: ListAllAvailableTimePerBranchComponent},
  {path: 'listAllAppiliedVaccinationPerBranch/:id', component: ListAllAppliedVaccinationPerBranchComponent},
  {path: 'scheduleVaccination', component: ScehduleVaccinationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
