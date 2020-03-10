import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { A1Component } from './a1/a1.component';
import {Routes, RouterModule} from "@angular/router";
import { A22Component } from './a22/a22.component'
var obj:Routes=[
{path:"",component:AdmincommonComponent,children:[
  {path:"a1",component:A1Component}
]},
{path:"a2path",component:A22Component},

]
@NgModule({
  declarations: [AdmincommonComponent, A1Component, A22Component],
  imports: [
    CommonModule,RouterModule.forChild(obj)
  ]
})
export class AdminModule { }
