import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  constructor() { 
    console.log('singleton service !!!');
  }
}
