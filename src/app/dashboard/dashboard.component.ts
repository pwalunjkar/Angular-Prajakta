import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor (private router: Router){}
submit()
{
  this.router.navigateByUrl("/register");
}
test()
{
  this.router.navigateByUrl("/india");
}
}
