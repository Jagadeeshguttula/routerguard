import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
uname="Scott"
  constructor() { }
fun1(){
  
  localStorage.setItem("sno","100")
  alert(localStorage.getItem("sno"))
}
  ngOnInit() {
  }

}
