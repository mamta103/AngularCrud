import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

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
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }