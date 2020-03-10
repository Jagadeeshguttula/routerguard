import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
  sno:number=100
serGetData(ob){
return this.ht.post("http://localhost:1000/service1",ob)
}
  constructor(private ht:HttpClient) { }
}
