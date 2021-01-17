import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAvailableTimePerBranchComponent } from './list-all-available-time-per-branch.component';

describe('ListAllAvailableTimePerBranchComponent', () => {
  let component: ListAllAvailableTimePerBranchComponent;
  let fixture: ComponentFixture<ListAllAvailableTimePerBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllAvailableTimePerBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllAvailableTimePerBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
