import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutputComponent } from './student-output.component';

describe('StudentOutputComponent', () => {
  let component: StudentOutputComponent;
  let fixture: ComponentFixture<StudentOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
