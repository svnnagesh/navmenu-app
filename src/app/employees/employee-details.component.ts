import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from './employees.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee;
  private id:number;

  constructor(private activatedRoute:ActivatedRoute, private empService:EmployeesService, private router:Router) { }

  ngOnInit() {
    /* const id = this.activatedRoute.snapshot.paramMap.get['id'];
    this.employee = this.empService.getEmplyee(id); */

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.employee = this.empService.getEmplyee(this.id);
    })

  }

  nextEmployee() {
    if(this.id < 3) {
      this.id = this.id + 1;
    } else {
      this.id = 1;
    } 
    this.router.navigate(['/details', this.id], {
      queryParamsHandling:'preserve'
    });
  }

}
