import { Component } from '@angular/core';
import {AllCommunityModules} from "@ag-grid-community/all-modules"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data=[
  {uname:"scott",city:"hyd",sal:10000},
  {uname:"john",city:"sec",sal:20000},
  {uname:"sam",city:"hyd",sal:13000},
  {uname:"alex",city:"vizag",sal:17000}
]
col=[
  {field:"uname",sortable:true,filter:true},
  {field:"city"},
  {field:"sal",sortable:true,filter:true}
]
modules=AllCommunityModules
}
