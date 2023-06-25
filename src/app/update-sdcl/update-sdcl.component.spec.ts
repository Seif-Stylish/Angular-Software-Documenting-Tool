import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSDCLComponent } from './update-sdcl.component';

describe('UpdateSDCLComponent', () => {
  let component: UpdateSDCLComponent;
  let fixture: ComponentFixture<UpdateSDCLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSDCLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSDCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
