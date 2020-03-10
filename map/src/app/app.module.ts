import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import {Routes, RouterModule} from "@angular/router"
var obj:Routes=[
  {path:"c1",component:C1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
