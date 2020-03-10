import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import {NgxPaginationModule} from "ngx-pagination"
import {OrderModule} from "ngx-order-pipe"
import {Ng2SearchPipeModule} from "ng2-search-filter"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [Ng2SearchPipeModule,
    BrowserModule,HttpClientModule,FormsModule,NgxPaginationModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
