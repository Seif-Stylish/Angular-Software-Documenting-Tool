import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhaseDetailsComponent } from './single-phase-details.component';

describe('SinglePhaseDetailsComponent', () => {
  let component: SinglePhaseDetailsComponent;
  let fixture: ComponentFixture<SinglePhaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePhaseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
