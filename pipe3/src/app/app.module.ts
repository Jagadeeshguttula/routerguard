import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { P1Pipe } from './p1.pipe';
import { P2Pipe } from './p2.pipe';
import { P3Pipe } from './p3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    P1Pipe,
    P2Pipe,
    P3Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
