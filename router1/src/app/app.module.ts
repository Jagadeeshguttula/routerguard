import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
var obj:Routes=[
  {path:"",component:HomeComponent},
  {path:"hm",component:HomeComponent},
  {path:"ab",component:AboutusComponent},
  {path:"ser",component:ServicesComponent},
  {path:"**",component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutusComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
