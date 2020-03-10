import { Component } from '@angular/core';
import {Cls1} from "./cls1"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj:Cls1
  constructor(){
    this.obj=new Cls1()
  }
}
