import { Component } from '@angular/core';
import {fromEvent} from "rxjs"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
str:string;
  ngOnInit(){
    var con=<HTMLInputElement>document.getElementById("t1")
   // alert(con)
   fromEvent(con,"keydown").subscribe((dt:KeyboardEvent)=>{
     this.str=""
     if(dt.keyCode<48 || dt.keyCode>57)
     {
      this.str="Enter numbers only"
      dt.preventDefault()
     }
   })
  }
}
