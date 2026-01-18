import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssAssignmentComponent } from './scss-assignment.component';

describe('ScssAssignmentComponent', () => {
  let component: ScssAssignmentComponent;
  let fixture: ComponentFixture<ScssAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
