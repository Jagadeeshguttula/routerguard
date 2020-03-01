import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2/c2.component';
import {Routes, RouterModule} from "@angular/router"
var obj:Routes=[
  {path:"",component:C2Component}
]
@NgModule({
  declarations: [C2Component],
  imports: [
    CommonModule,RouterModule.forChild(obj)
  ]
})
export class M2Module { }
