import { Routes } from '@angular/router';
import { ScssAssignmentComponent } from './pages/scss-assignment/scss-assignment.component';
import { TypescriptAssignmentComponent } from './pages/typescript-assignment/typescript-assignment.component';
import { AngularAssignmentComponent } from './pages/angular-assignment/angular-assignment.component';

export const routes: Routes = [
  { path: 'scss-assignment', component: ScssAssignmentComponent },
  { path: 'typescript-assignment', component: TypescriptAssignmentComponent },
  { path: 'angular-assignment', component: AngularAssignmentComponent }
];
