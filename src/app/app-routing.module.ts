import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllIncidentComponent } from './pages/incident/all-incident/all-incident.component';
import { AddIncidentComponent } from './pages/incident/add-incident/add-incident.component';
import { ViewReportComponent } from './pages/reports/view-report/view-report.component';
import { ViewIncidentComponent } from './pages/incident/view-incident/view-incident.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AllDepartmentComponent } from './pages/department/all-department/all-department.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [

  {path: '', title: 'Home', component: HomeComponent, pathMatch: 'full'},
  {path: 'form', title: 'Form', component: FormComponent},
  {path: 'contact', title: 'Contact Us', component: ContactComponent},
  {path: 'about', title: 'About Us', component: AboutComponent},

  // reports
  {path: 'all-reports', title: 'All Reports', component: AllIncidentComponent, },
  {path: 'add-report', title: 'Add Incident', component: AddIncidentComponent},
  {path: 'view-report/:id', title: 'View Incident', component: ViewReportComponent},
  {path: 'view-incident/:id', title: 'View Report', component: ViewIncidentComponent},

  // department
  {path: 'department', title: 'Department', component: AllDepartmentComponent},

  // AUTH
  {path: 'login', title: 'Login', component: LoginComponent},
  {path: 'register', title: 'Register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
