import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstName:any;
  middleName:any;
  lastName:any;
constructor(private router:Router){}
  save()
  {
    console.log("Submitted successfully", this.firstName, this.middleName, this.lastName);
  }
  backToHome()
  {
    this.router.navigateByUrl("/dashboard")
  }
}
