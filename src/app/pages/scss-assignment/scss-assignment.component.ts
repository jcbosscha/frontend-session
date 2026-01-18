import { Component } from '@angular/core';

@Component({
  selector: 'app-scss-assignment',
  templateUrl: './scss-assignment.component.html',
  styleUrl: './scss-assignment.component.scss',
  standalone: true
})
export class ScssAssignmentComponent {

  isExampleCollapsed = true;
 
  collapseExample(){
    this.isExampleCollapsed = !this.isExampleCollapsed;
  }

}
