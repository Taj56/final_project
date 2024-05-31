import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AllIncidentComponent } from './pages/incident/all-incident/all-incident.component';
import { AddIncidentComponent } from './pages/incident/add-incident/add-incident.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { ViewReportComponent } from './pages/reports/view-report/view-report.component';
import { ViewIncidentComponent } from './pages/incident/view-incident/view-incident.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component'
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { AllDepartmentComponent } from './pages/department/all-department/all-department.component';
import { UpdateDepartmentComponent } from './pages/department/update-department/update-department.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    AllIncidentComponent,
    AddIncidentComponent,
    HeaderComponent,
    ViewReportComponent,
    ViewIncidentComponent,
    LoginComponent,
    RegisterComponent,
    AllDepartmentComponent,
    UpdateDepartmentComponent,
    HomeComponent,
    FormComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
