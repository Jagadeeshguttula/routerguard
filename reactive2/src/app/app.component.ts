import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from "@angular/forms"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform:FormGroup=new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern("[0-5]*")])
  })
  fun1(){
    if(this.myform.valid){
      alert("Valid")
      alert(this.myform.controls.fname.value)
    }
    else
    {
      alert("Invalid")
    }
  }
}
