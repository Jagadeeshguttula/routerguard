import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
serGetData(){
return this.ht.get("http://localhost:1000/met2")
}
  constructor(private ht:HttpClient) {

   }
}
