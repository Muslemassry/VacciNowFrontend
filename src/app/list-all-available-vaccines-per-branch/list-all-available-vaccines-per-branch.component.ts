import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Vaccine } from '../classes';
import { VaccNowService } from '../vacc-now.service';

@Component({
  selector: 'app-list-all-available-vaccines-per-branch',
  templateUrl: './list-all-available-vaccines-per-branch.component.html',
  styleUrls: ['./list-all-available-vaccines-per-branch.component.css']
})
export class ListAllAvailableVaccinesPerBranchComponent implements OnInit {
  vaccines: Vaccine[] = [];

  constructor(private vaccNowService: VaccNowService, private route: ActivatedRoute, private location: Location, private router: Router) {

  }

  ngOnInit(): void {
    this.getVaccines();
  }

  getVaccines(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vaccNowService.listAvailableVaccinesBranch(id).subscribe(vaccines => this.vaccines = vaccines);
  }

  getAvailableTimez() : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/listAvailableTimesBranch/'+id]);
  } 

  getAvailableVaccination() : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/listAllAppiliedVaccinationPerBranch/'+id]);
  } 

  goBack(): void {
    this.location.back();
  }
}
