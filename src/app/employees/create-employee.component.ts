import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department} from '../models/department.model';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  photoPreview: boolean= false;
  datePickerConfig:Partial<BsDatepickerConfig>;
    employee: Employee= {
      id:null,
    name:null,
    gender:null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null
    
    };
  //Array of Department
  departments: Department[]= [
    {id: 1, name: "HelpDesk"},
    {id: 2, name: "IT"},
    {id: 3, name: "HR"},
    {id: 4, name: "Payroll"},
    {id: 5, name: "Admin"}
  ];
  
  constructor(private _employeeService:EmployeeService,
              private _router:Router) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue'
      });
    }
    togglePhotoPreview(){
      this.photoPreview = !this.photoPreview;
    }
  ngOnInit() {
  }
  saveEmployee():void{
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

}
