import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ser:S1Service){

  }
  fun1(){
    this.ser.serGetData({uname:"scott"}).subscribe(dt=>{
      alert(dt.city)
    })
  }
}
