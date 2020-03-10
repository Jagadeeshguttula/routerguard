import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data;
  constructor(private ser:S1Service){
    this.ser.message.subscribe(dt=>{
      this.data=dt
    })
  }
}
