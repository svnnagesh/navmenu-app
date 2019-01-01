import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person = 'Mohan';

  website = {
    url:'https://www.google.com',
    name:'Google it!'
  }

  myName = 'Nagesh';

  constructor() { }

  ngOnInit() {
  }


  msg1 = 'Hello World !!!';
  setMsg(data:string) {
    this.msg1 = data;
  }
  /* dataValid = false;
  isValid() {
    this.dataValid = true;
  } */
  isValid = true;
  toggleFlag3 = false;
  toggle3 () {
    this.toggleFlag3 = true;
  }

}
