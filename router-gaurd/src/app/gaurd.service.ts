import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate{
  tmp:boolean=true;
canActivate(){
  if(localStorage.getItem("aut"))
  return true;
  else
  return false;
}
  constructor() { }
}
