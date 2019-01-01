import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private listEmployees = [
    {
      id:1,
      name:'Nagesh',
      gender:'Male',
      contactPref:'Email',
      email:'nagesh@nagesh.com',
      department:'IT',
      isActive:true,
      DateOfBirth: new Date('08/06/1989'),
      photoPath:'assets/images/veena.jpg'
    },
    {
      id:2,
      name:'Lavanya',
      gender:'Female',
      contactPref:'Email',
      email:'lavanya@lavanya.com',
      department:'Accounts',
      isActive:true,
      DateOfBirth: new Date('04/14/1995'),
      photoPath:'assets/images/veena.jpg'
    },
    {
      id:3,
      name:'Chalapathi',
      gender:'Male',
      contactPref:'Email',
      email:'challu@challu.com',
      department:'Accounts',
      isActive:true,
      DateOfBirth: new Date('05/15/1999'),
      photoPath:'assets/images/veena.jpg'
    }
  ]

  constructor() {
    
   }

   getEmployees() {
     return this.listEmployees
   }

  getEmplyee(id:number) {
    return this.listEmployees.find(e => e.id === id);
  }

}
