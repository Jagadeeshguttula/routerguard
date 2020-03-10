import { Component } from '@angular/core';
import {fromEvent} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromevent1';xpos;ypos
  constructor(){
    fromEvent(document,"mousemove").subscribe((dt:MouseEvent)=>{
      this.xpos=dt.clientX+-50
      this.xpos+="px"
      this.ypos=dt.clientY+"px"
    })
  }
}
