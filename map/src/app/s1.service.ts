import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {pipe} from "rxjs"
import {map} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class S1Service {
data:object;
  constructor(private ht:HttpClient) { }
  serGetData(){
    return this.ht.get("met1").pipe(map(dt=>{
    //  alert("hi")
      this.data=dt
      return dt
    }))
  }
}
