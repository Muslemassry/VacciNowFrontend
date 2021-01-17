import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Application } from '../classes';
import { VaccNowService } from '../vacc-now.service';

@Component({
  selector: 'app-list-all-applied-vaccination-per-period',
  templateUrl: './list-all-applied-vaccination-per-period.component.html',
  styleUrls: ['./list-all-applied-vaccination-per-period.component.css']
})
export class ListAllAppliedVaccinationPerPeriodComponent implements OnInit {
  fromDate : string;
  toDate: string;
  email : string;
  error : string;
  sentEmailMesage : string;
  appliedVaccinations : Application[] = [];
  confirmedApplication : Application;


  constructor(private vaccNowService: VaccNowService) { }

  ngOnInit() {
    
  }
  
  listAllAppliedVaccinations() : void {
    this.vaccNowService.listAllAppliedVaccinationPerPeriod(this.fromDate, this.toDate).subscribe(apps => this.appliedVaccinations = apps);
  }

  confirmVaccination(application : any) : void {
    console.log(application.vaccine.id);
    console.log(application.vaccine.name);
    this.error = '';
    this.sentEmailMesage = '';
    if (this.email === undefined || this.email == '') {
      this.error = 'Enter email to send confirmation to';
      return; 
    }

    application.toEmail = this.email;
    this.vaccNowService.vaccineCertificate(application).subscribe(apps => this.clearApp(apps));
  }

  clearApp(application : any) : void {
    this.appliedVaccinations = this.appliedVaccinations.filter(obj => obj.id !== application.id);
    this.confirmedApplication = application;
    this.sentEmailMesage = "A confirmation was sent succesfully for email " + this.email;
  } 

}
