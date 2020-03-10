import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'of';
  constructor(private ser:S1Service){
    this.ser.funser().subscribe(dt=>{
      alert(dt)
    })
  }
}
