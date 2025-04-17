import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgstylecomponentComponent } from '../ngstylecomponent/ngstylecomponent.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgstylecomponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private router: Router){}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  submit()
  {
    alert("Login successfull")
    console.log(this.loginForm);
    this.router.navigateByUrl("/dashboard");
  }

}
