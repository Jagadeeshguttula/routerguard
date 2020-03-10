import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
x:number=123;y:string
  constructor(@Inject(ActivatedRoute) public ar) { 
    this.x=333;
    this.ar.params.subscribe((data)=>{
      this.x=data.sno
      this.y=data.uname
    })
  }

  ngOnInit() {
  }

}
