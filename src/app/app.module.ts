import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { ListEmployeesComponent } from './employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
