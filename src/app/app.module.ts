import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

import { SingletonService } from './singleton.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './employees/employees.service';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { SafeGuardService } from './services/safe-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';


const appRoute:Routes = [

  { path:'', component:HomeComponent },
  { path:'products', component:ProductsComponent },
  { path:'services', component:ServicesComponent, canDeactivate:[SafeGuardService] },
  { path:'contact', component:ContactComponent },
  { path:'employees', component:EmployeesComponent },
  { path:'notfound', component:PageNotFoundComponent },
  { path:'details/:id', component:EmployeeDetailsComponent, canActivate:[EmployeeDetailsGuardService] }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [SingletonService, EmployeesService, SafeGuardService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
