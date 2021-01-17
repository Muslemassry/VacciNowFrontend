import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAvailableVaccinesPerBranchComponent } from './list-all-available-vaccines-per-branch.component';

describe('ListAllAvailableVaccinesPerBranchComponent', () => {
  let component: ListAllAvailableVaccinesPerBranchComponent;
  let fixture: ComponentFixture<ListAllAvailableVaccinesPerBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAvailableVaccinesPerBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAvailableVaccinesPerBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
