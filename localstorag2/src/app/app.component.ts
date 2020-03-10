import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localstorag2';
  t1:string;t2:string;chk1:boolean
  fun2(){
    this.t2=localStorage.getItem(this.t1)
  }
  funlogin(){
if(this.chk1)
{
  localStorage.setItem(this.t1,this.t2)
}
  }
}
