import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Vaccine } from '../classes';
import { VaccNowService } from '../vacc-now.service';

@Component({
  selector: 'app-list-all-applied-vaccination-per-branch',
  templateUrl: './list-all-applied-vaccination-per-branch.component.html',
  styleUrls: ['./list-all-applied-vaccination-per-branch.component.css']
})
export class ListAllAppliedVaccinationPerBranchComponent implements OnInit {
  appliedVaccinations : Vaccine [] = [];

  constructor(private vaccNowService: VaccNowService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.getAppliedVaccination();
  }

  getAppliedVaccination(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vaccNowService.listAllAppliedVaccinationPerBranch(id).subscribe(vaccines => this.appliedVaccinations = vaccines);
  }

  goBack(): void {
    this.location.back();
  }
}
