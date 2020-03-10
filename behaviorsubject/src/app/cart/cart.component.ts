import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ser:S1Service) { }
dtt;
  ngOnInit() {
    this.ser.message.subscribe(dt=>{
      this.dtt=dt
    })
  }
  funadd(){
    this.dtt++
    this.ser.funnext(this.dtt)
  }
}
