import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private ht:HttpClient) { }
  serIns(ob){
    return  this.ht.post("http://localhost:1000/ins",ob)
  }
}
