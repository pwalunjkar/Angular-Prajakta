import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgstylecomponentComponent } from '../ngstylecomponent/ngstylecomponent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
formGroup: any;
  constructor (private router: Router,private fb: FormBuilder){
    this.formGroup = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.minLength(8))
    })
  }
 
  submit()
  {
    alert("Login successfull")
    console.log(this.formGroup);
    this.router.navigateByUrl("/dashboard");
  }

}
