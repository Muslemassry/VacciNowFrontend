import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Vaccine } from '../classes';
import { VaccNowService } from '../vacc-now.service';

@Component({
  selector: 'app-list-all-available-time-per-branch',
  templateUrl: './list-all-available-time-per-branch.component.html',
  styleUrls: ['./list-all-available-time-per-branch.component.css']
})
export class ListAllAvailableTimePerBranchComponent implements OnInit {
  availableTimes : Date [] = [];
  constructor(private vaccNowService: VaccNowService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
    this.getTimez();
  }

  getTimez(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vaccNowService.availableTimeForBranch(id).subscribe(timez => this.availableTimes = timez);
  }

  goBack(): void {
    this.location.back();
  }
}