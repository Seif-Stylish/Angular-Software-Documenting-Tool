import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignFilesComponent } from './all-design-files.component';

describe('AllDesignFilesComponent', () => {
  let component: AllDesignFilesComponent;
  let fixture: ComponentFixture<AllDesignFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDesignFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDesignFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
