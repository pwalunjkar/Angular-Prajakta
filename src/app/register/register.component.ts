import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private router:Router){}
registerForm = new FormGroup({
  firstName: new FormControl(''),
  middleName: new FormControl(''),
  lastName: new FormControl(''),
  city: new FormControl(''),
  state: new FormControl(''),
  gender: new FormControl(''),
  declaration: new FormControl('')

})
students = [
              {
                id:1,
                name : 'Abc',
                age: 10
              },
              {
                id:2,
                name : 'xyz',
                age: 11
              },
              {
                id:3,
                name : 'pqr',
                age: 8
              },
              {
                id:4,
                name : 'lmn',
                age: 9
              }
];

//find()--returns single value,
// filter()---return multiple values,
// map()------
  save()
  {
    let studentsBelow10 = this.students.filter(x=>x.age<10);
    console.log('Students below 10',studentsBelow10);
    let add10 = this.students.map(x=>x.age+10);
    console.log('Students after adding 10',add10);
    console.log("Submitted successfully", this.registerForm.getRawValue());
    let studentwithage10 = this.students.find(x=>x.age==10);
    console.log('Students below 10',studentwithage10);
  }
  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
}
