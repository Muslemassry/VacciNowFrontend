import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScehduleVaccinationComponent } from './scehdule-vaccination.component';

describe('ScehduleVaccinationComponent', () => {
  let component: ScehduleVaccinationComponent;
  let fixture: ComponentFixture<ScehduleVaccinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScehduleVaccinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScehduleVaccinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
