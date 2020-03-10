import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  t1:string;
  t2:string;x:string;y:string
  arr:number[]=[10,20,30,40,50]
  fun1(){
    this.x=this.t1
    this.y=this.t2
  }
}
