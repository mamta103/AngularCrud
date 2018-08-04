import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Department} from '../models/department.model';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  photoPreview: boolean= false;
  datePickerConfig:Partial<BsDatepickerConfig>;
  //Array of Department
  departments: Department[]= [
    {id: 1, name: "HelpDesk"},
    {id: 2, name: "IT"},
    {id: 3, name: "HR"},
    {id: 4, name: "Payroll"},
    {id: 5, name: "Admin"}
  ];
  
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31)
      });
    }
    togglePhotoPreview(){
      this.photoPreview = !this.photoPreview;
    }
  ngOnInit() {
  }
  saveEmployee(empForm:NgForm):void{
    console.log(empForm.value);
  }

}
