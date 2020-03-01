import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import {Routes, RouterModule} from "@angular/router"
var obj:Routes=[
  {path:"",component:C1Component}
]
@NgModule({
  declarations: [C1Component],
  imports: [
    CommonModule,RouterModule.forChild(obj)
  ]
})
export class M1Module { }
