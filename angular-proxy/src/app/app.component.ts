import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-proxy';
  constructor(private ht:HttpClient){

  }
  fun1(){
    this.ht.get("/met1").subscribe((dt:any)=>{
      alert(dt.result)
    })
  }
}
