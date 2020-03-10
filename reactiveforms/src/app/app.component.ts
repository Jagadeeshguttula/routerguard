import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  myform:FormGroup
  constructor(){
    this.myform=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(5)])
  })
}
}
