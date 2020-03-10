import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class S1Service {
bs
message;
  constructor() {
    this.bs=new BehaviorSubject("100")
    this.message=this.bs.asObservable()
   }
   funnext(val){
    this.bs.next(val)
   }
}
