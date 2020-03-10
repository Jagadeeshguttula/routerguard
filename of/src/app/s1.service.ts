import { Injectable } from '@angular/core';
import {of, Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor() { }
  funser():Observable<object>{
    return of({uname:"scott"});
  }
  
}
