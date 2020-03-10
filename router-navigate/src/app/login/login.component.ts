import { Component, OnInit, Inject, inject } from '@angular/core';
import {Router} from "@angular/router"
import { S1Service } from '../s1.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public rt:Router,@Inject(S1Service) public ser) { }

  ngOnInit() {
  }
  t1:string;t2:string
funlogin(){
  if(this.t1=="scott" && this.t2=="scott123")
  {
    this.ser.tmp=true
    this.rt.navigate(["welc"])
  }
  else
  alert("Invalid")
}
}
