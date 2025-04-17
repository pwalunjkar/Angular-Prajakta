import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngstylecomponent',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngstylecomponent.component.html',
  styleUrl: './ngstylecomponent.component.css'
})
export class NgstylecomponentComponent {
  students: any[];
  isValid: boolean = false;
  name: String= '';

  constructor(){
    // Adding Student instances to students array
    this.students = [
      { name: 'John', rollNo: 2, mark1:55, mark2:79, mark3:85 },
      { name: 'Peter', rollNo: 5, mark1:35, mark2:50, mark3:65 },
      { name: 'Brij', rollNo: 7, mark1:85, mark2:90, mark3:92 }
    ];
  }
  
  getMarkColor(mark:any){
    if(mark >= 75)
      return 'green';
    else if (mark > 50 && mark < 75)
      // Color Amber
      return 'yellow';
    else
      return 'red';
  }

}
