import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private ht:HttpClient) { }
  serPostData(ob){
    return this.ht.post("http://localhost:1000/insdata",ob)
  }
  serDelrec(ob)
  {
    return this.ht.post("http://localhost:1000/rmvdata",ob)

  }
  serGetData(){
   return this.ht.get("http://localhost:1000/getdata")
  }
  serUpdateData(obj){
    return this.ht.post("http://localhost:1000/updatedata",obj)

  }
}
