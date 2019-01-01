import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit, OnChanges {

  @Input() employee;
  @Output() notify: EventEmitter<string> = new EventEmitter();

  handleClick() {
    this.notify.emit(this.employee.name);
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {
    //console.log(changes);
    let previousEmployee = changes.employee.previousValue;
    let currentEmployee = changes.employee.currentValue;
    
    console.log('Previous :' + (previousEmployee ? previousEmployee.name:'NULL'));
    console.log('Current :' + currentEmployee.name);
  }

  getNameandGender() {
    return this.employee.name + ' --- ' + this.employee.gender;
  }

 

}
