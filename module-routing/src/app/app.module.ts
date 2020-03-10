import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
var objmain:Routes=[
  {path:"ad",loadChildren:"./admin/admin.module#AdminModule"},
  {path:"us",loadChildren:"./user/user.module#UserModule"}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(objmain)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
