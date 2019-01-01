import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  getEmployees;
  dataFromChild:string;
 // index = 0;
  employeeToDisplay;
  private arrayIndex = 1;

  constructor(private emp:EmployeesService, private _router:Router) { 
    
  }

  ngOnInit() {
    this.getEmployees = this.emp.getEmployees();
    this.employeeToDisplay = this.getEmployees[0];
  }

  handleNotify(eventData:string) {
    this.dataFromChild = eventData;
  }

  isBgApplied = 'blue';

  nextEmployee() {
    debugger;
    //console.log('next employee----')
    if(this.arrayIndex <= 2) {
      this.employeeToDisplay = this.getEmployees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.getEmployees[0];
      this.arrayIndex = 1;
    }
  }

  onClick(employeeId:number) {
    this._router.navigate(['/details', employeeId])
  }

}
