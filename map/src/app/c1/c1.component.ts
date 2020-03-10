import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
catdt:object
  constructor(private ser:S1Service) { 
    this.catdt=this.ser.data
  }

  ngOnInit() {
  }

}
