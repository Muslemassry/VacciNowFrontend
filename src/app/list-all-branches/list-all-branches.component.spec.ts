import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBranchesComponent } from './list-all-branches.component';

describe('ListAllBranchesComponent', () => {
  let component: ListAllBranchesComponent;
  let fixture: ComponentFixture<ListAllBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllBranchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
