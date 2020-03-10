import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AllCommunityModules} from "@ag-grid-community/all-modules"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aggrid2';
  tabdata:object
  cols=[
    {field:"_id"},
    {field:"uname",sortable:true,checkboxSelection:true},
    {field:"city"}]
  mod=AllCommunityModules
  constructor(private ht:HttpClient){
    this.ht.get("http://localhost:1000/getdata").subscribe(dt=>{
      this.tabdata=dt
    })
  }
  
}
