import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllConfirmedVaccinationComponent } from './show-all-confirmed-vaccination.component';

describe('ShowAllConfirmedVaccinationComponent', () => {
  let component: ShowAllConfirmedVaccinationComponent;
  let fixture: ComponentFixture<ShowAllConfirmedVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllConfirmedVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllConfirmedVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
