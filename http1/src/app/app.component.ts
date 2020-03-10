import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:object;t1:string;
  constructor(public ht:HttpClient){

  }
  fun1(){
    this.ht.get("http://api.openweathermap.org/data/2.5/weather?units=metric&appid=864454684e0c56c960ac9555ac00425c&q="+this.t1)
    .subscribe(dt=>{
      this.data=(dt)
    })
  }
}
