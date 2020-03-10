import { Component, OnInit } from '@angular/core';
import {Cls1} from "../cls1"
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
obj:Cls1
  constructor() { 
    this.obj=new Cls1()
  }

  ngOnInit() {
  }

}
