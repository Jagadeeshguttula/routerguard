import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercommonComponent } from './usercommon/usercommon.component';
import { U1Component } from './u1/u1.component';
import {Routes, RouterModule} from "@angular/router"
var obj:Routes=[
{path:"",component:UsercommonComponent,children:[
  {path:"u1",component:U1Component}
]},

]
@NgModule({
  declarations: [UsercommonComponent, U1Component],
  imports: [
    CommonModule,RouterModule.forChild(obj)
  ]
})
export class UserModule { }
