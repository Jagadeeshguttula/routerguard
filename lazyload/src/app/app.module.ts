import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, Router, RouterModule} from "@angular/router"
import {HttpClientModule} from "@angular/common/http" 
import { S1Service } from './s1.service';
var obj:Routes=[
  {path:"module1",loadChildren:"./m1/m1.module#M1Module"},
{path:"module2",loadChildren:"./m2/m2.module#M2Module",canLoad:[S1Service]}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
