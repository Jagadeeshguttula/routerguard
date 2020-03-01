import { Component, OnInit, Inject } from '@angular/core';
import { GaurdService } from '../gaurd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
t1:string;t2:string
  constructor(@Inject(GaurdService) private obj,private rt:Router) { }
  funlogin(){
    if(this.t1=="scott" &&this.t2=="scott123")
    {
      this.obj.tmp=false
      localStorage.setItem("aut","1")
      this.rt.navigateByUrl("wel")
    }
    else
    {
      alert("Invalid")
    }
  }
  ngOnInit() {
  }

}
