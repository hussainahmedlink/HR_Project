import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashoard } from './dashoard';

describe('Dashoard', () => {
  let component: Dashoard;
  let fixture: ComponentFixture<Dashoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashoard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
