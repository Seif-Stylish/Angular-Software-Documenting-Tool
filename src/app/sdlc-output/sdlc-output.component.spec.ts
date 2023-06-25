import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdlcOutputComponent } from './sdlc-output.component';

describe('SdlcOutputComponent', () => {
  let component: SdlcOutputComponent;
  let fixture: ComponentFixture<SdlcOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdlcOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdlcOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
