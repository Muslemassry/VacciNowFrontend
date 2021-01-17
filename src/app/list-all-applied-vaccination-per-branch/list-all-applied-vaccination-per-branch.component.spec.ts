import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAppliedVaccinationPerBranchComponent } from './list-all-applied-vaccination-per-branch.component';

describe('ListAllAppliedVaccinationPerBranchComponent', () => {
  let component: ListAllAppliedVaccinationPerBranchComponent;
  let fixture: ComponentFixture<ListAllAppliedVaccinationPerBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAppliedVaccinationPerBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAppliedVaccinationPerBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
