import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtuname:string;txtcity:string;
  constructor(private ser:S1Service){

  }
  fun1(){
    var obj={uname:this.txtuname,city:this.txtcity}
    this.ser.serIns(obj).subscribe(dt=>{
      alert(dt.resp)
    })
  }
}
