import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivemWorkshopDemo } from './fivem-workshop-demo';

describe('FivemWorkshopDemo', () => {
  let component: FivemWorkshopDemo;
  let fixture: ComponentFixture<FivemWorkshopDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivemWorkshopDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FivemWorkshopDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
