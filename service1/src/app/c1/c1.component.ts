import { Component, OnInit, Inject } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(@Inject(S1Service) public obj) { }

  ngOnInit() {
  }

}
