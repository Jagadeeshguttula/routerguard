import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templte5';
  d1="";r1;abc
  funsend(formobj){
  if(formobj.valid==true){
alert(this.d1)
alert(this.r1)
alert(this.abc)
    }
    else
    {
      alert("Invalid")
    }
}
}
