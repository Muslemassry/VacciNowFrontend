import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAppliedVaccinationPerPeriodComponent } from './list-all-applied-vaccination-per-period.component';

describe('ListAllAppliedVaccinationPerPeriodComponent', () => {
  let component: ListAllAppliedVaccinationPerPeriodComponent;
  let fixture: ComponentFixture<ListAllAppliedVaccinationPerPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAppliedVaccinationPerPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAppliedVaccinationPerPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
