import { CanDeactivate } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { Injectable } from "@angular/core";

@Injectable()
export class SafeGuardService implements CanDeactivate<ServicesComponent> {
    canDeactivate(component:ServicesComponent):boolean {
        if(component.createGuard.dirty) {
            return confirm('Are you sure to want to exit ?');
        } 
         return true;       
    }
}