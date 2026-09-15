import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitWallConstruction } from './pit-wall-construction';

describe('PitWallConstruction', () => {
  let component: PitWallConstruction;
  let fixture: ComponentFixture<PitWallConstruction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitWallConstruction],
    }).compileComponents();

    fixture = TestBed.createComponent(PitWallConstruction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
