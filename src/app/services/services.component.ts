import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { SingletonService } from '../singleton.service';
import { FormGroup, FormControl, FormBuilder, FormControlName, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation:ViewEncapsulation.None
})


export class ServicesComponent implements OnInit {

  @ViewChild('nameInput') input:ElementRef;
  @ViewChild('nameElementRef') xxx:ElementRef;
  @ViewChild('serviceForm') createGuard:NgForm;
  

  myName = 'Nagesh';
  user = {
    name:'',
    email:'',
    phone:'',
    city:'',
    message:''
  }

  userData:FormGroup;

  cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Pune'];

  constructor(private singleS:SingletonService, private fb:FormBuilder) {

    //without formbuilder
    /* this.userData = new FormGroup({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      city:['', Validators.required]
    }) */

    
    this.userData = this.fb.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email:['', Validators.required],
      mobile:['', Validators.required],
      city:['', Validators.required],
      gender:['', Validators.required],
     
    })

    

  }

  ngOnInit() {
    this.xxx.nativeElement.innerHTML = 'Change content with Template Reference Variable';
    this.input.nativeElement.value = 'asdfasdfasdfasdfasdf';
  }

   onSubmit() {
    this.validations();
    var aaa = 'asdfasdf';
    let asdfdsf = 'asdfasdf';
    const asd = 'asdf';

   }

  reactForm(userData:FormGroup) {
    console.log( this.userData);
    let user = this.userData.value;
    console.log(user);
  }

   validations() {
    //var params = this.user;
    console.log(this.user)

    if(!this.user.name) {
      this.user.message = 'Enter name !!!';
    } else if(!this.user.email) {
      this.user.message = 'Enter email !!!';
    } else if(!this.user.phone) {
      this.user.message = 'Enter phone !!!';
    } else if(!this.user.city) {
      this.user.message = 'Select city !!!';
    } else {
      console.log(this.input.nativeElement.value);
    }

   }

   /* hasUnsavedData(){
     console.log('unsaved data !!!');
   }

   @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: any) {
        if (this.hasUnsavedData()) {
            $event.returnValue =true;
        }
    } */
   

   

  

}
