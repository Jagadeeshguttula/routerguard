import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class S1Service implements CanLoad{

  constructor() { }
  canLoad(){
    var rv=window.confirm("Big module You want to load?")
    return rv;
  }
}
