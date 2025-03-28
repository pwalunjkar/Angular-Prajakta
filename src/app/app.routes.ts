import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndiaComponent } from './india/india.component';
import { AustraliaComponent } from './australia/australia.component';
import { ChinaComponent } from './china/china.component';
import { JapanComponent } from './japan/japan.component';
import { GermanyComponent } from './germany/germany.component';

export const routes: Routes = [{ path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'india', component: IndiaComponent},
    {path: 'australia', component: AustraliaComponent},
    {path: 'china', component: ChinaComponent},
    {path: 'japan', component: JapanComponent},
    {path: 'germany', component: GermanyComponent},
];
