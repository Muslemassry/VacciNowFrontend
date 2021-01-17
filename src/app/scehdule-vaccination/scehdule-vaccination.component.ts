import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Application, Vaccine } from '../classes';
import { VaccNowService } from '../vacc-now.service';

@Component({
  selector: 'app-scehdule-vaccination',
  templateUrl: './scehdule-vaccination.component.html',
  styleUrls: ['./scehdule-vaccination.component.css']
})
export class ScehduleVaccinationComponent implements OnInit {
  scheduleVaccination : Application = new Application();
  vaccines: Vaccine[] = [];
  availableTimes : Date [] = [];
  message : any = '';

  constructor(private vaccNowService: VaccNowService) { }

  ngOnInit() {
    
  }
  
  doSscheduleVaccination() : void {
    this.vaccNowService.scheduleVaccinationTimeslot(this.scheduleVaccination).subscribe(returnedMessage => this.updateMessage(returnedMessage));
    this.scheduleVaccination = new Application();
  }

  updateMessage(returnedMsg : any) : void {
    this.message = returnedMsg.message;
  }

  selectTimeSlot(e : any) {
    this.scheduleVaccination.appointment = new Date(e.target.value);
    this.availableTimes = [];
  }

  showAvailableTimeSlots() : void {
    if (this.scheduleVaccination.branchId !== undefined) {
      this.vaccNowService.availableTimeForBranch(this.scheduleVaccination.branchId).subscribe(timez => this.availableTimes = timez);
    }
  }

  
  getVaccines(): void {
    if (this.scheduleVaccination.branchId !== undefined) {
      this.vaccNowService.listAvailableVaccinesBranch(this.scheduleVaccination.branchId).subscribe(vaccines => this.vaccines = vaccines);
    }
  }

  selectVaccine(e : any) {
    this.scheduleVaccination.vaccineId = e.target.value;
    this.vaccines = [];
  }
  
}
