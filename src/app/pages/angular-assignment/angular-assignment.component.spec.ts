import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAssignmentComponent } from './angular-assignment.component';

describe('AngularAssignmentComponent', () => {
  let component: AngularAssignmentComponent;
  let fixture: ComponentFixture<AngularAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
