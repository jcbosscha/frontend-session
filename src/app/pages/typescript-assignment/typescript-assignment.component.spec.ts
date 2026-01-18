import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptAssignmentComponent } from './typescript-assignment.component';

describe('TypescriptAssignmentComponent', () => {
  let component: TypescriptAssignmentComponent;
  let fixture: ComponentFixture<TypescriptAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
