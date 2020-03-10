import { Component } from '@angular/core';
import jQuery from "jquery"
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jquery';
  fun1(){
    $("#i1").hide(2000)
  }
  fun2(){
    $("#d1").animate({width:'300px',height:'300px'},2000)
  }
  fun3(){
    jQuery("#d2").animate({left:1000},2000)
  }
}
