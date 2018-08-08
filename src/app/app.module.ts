import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent},
  { path: 'create', component: CreateEmployeeComponent},
  { path:'', redirectTo: '/list', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective
  ],
  imports: [
    BrowserModule,FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
