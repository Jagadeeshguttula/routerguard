import { Component } from '@angular/core';
import {fromEvent} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fromevent2';
  ngOnInit(){
    var cont=<HTMLImageElement>document.getElementById("i1")
    fromEvent(cont,"mousedown").subscribe((dt:MouseEvent)=>{
      if(dt.button == 2)
      alert("Can not copy")
    })
  }
  constructor(){

    
  }
}
