import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-node';
  constructor(private ser:S1Service){

  }
  fun1(){
 this.ser.serGetData().subscribe((dt:any)=>{
   alert(dt.un)
 })
  }
}
