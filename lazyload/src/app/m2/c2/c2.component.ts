import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  data:Object;
    
  constructor(private ht:HttpClient) { 
    this.ht.get("https://restcountries.eu/rest/v2/all").subscribe((dt:object)=>{
      this.data=dt
    })
  }

  ngOnInit() {
  }

}
