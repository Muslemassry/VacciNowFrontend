import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Application } from '../classes';
import { VaccNowService } from '../vacc-now.service';

@Component({
  selector: 'app-show-all-confirmed-vaccination',
  templateUrl: './show-all-confirmed-vaccination.component.html',
  styleUrls: ['./show-all-confirmed-vaccination.component.css']
})

export class ShowAllConfirmedVaccinationComponent implements OnInit {
  firstName : string;
  lastName: string;
  appliedVaccinations : Application[] = [];

  constructor(private vaccNowService: VaccNowService) { }

  ngOnInit() {
    
  }
  
  listAllAppliedVaccinations() : void {
    this.vaccNowService.showAllConfirmedVaccinationsOverPeriod(this.firstName, this.lastName).subscribe(apps => this.appliedVaccinations = apps);
  }
}
