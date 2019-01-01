import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeesService } from './employees.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {

  constructor(private _router:Router, private es:EmployeesService) { }
  
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    
    const emplyeeExists = !!this.es.getEmplyee(+route.paramMap.get('id'));

    if(emplyeeExists) {
      return true;
    } else {
      this._router.navigate(['notfound']);
      return false;
    }

  }
  


}
