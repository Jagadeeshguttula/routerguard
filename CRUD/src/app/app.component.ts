import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';colname:string="uname"
  tbl_data;ord:boolean=true
  constructor(private ser:S1Service){
    this.funGetData()
  }
  funord(cn){
    this.colname=cn
    this.ord=!this.ord
  }
  t1:string;t2:string;tmp=0;txt1:string;txt2:string
  funedit(obj){
    this.tmp=obj._id
    this.txt1=obj.uname
    this.txt2=obj.city
  }
  fundel(rowid){
    this.ser.serDelrec({_id:rowid}).subscribe((dt:any)=>{
      alert(dt.resp)
      this.funGetData()
    })
  }
  funsave(){
    var newobj={uname:this.txt1,city:this.txt2}
    this.ser.serUpdateData([{_id:this.tmp},newobj]).subscribe(dt=>{
      alert(dt)
      this.funGetData()
      this.tmp=0;
    })
  }
  funadd(){
    this.ser.serPostData({uname:this.t1,city:this.t2}).subscribe((dt:any)=>{
      alert(dt.result)
      this.funGetData()
    })
  }
  funGetData(){
    this.ser.serGetData().subscribe(dt=>{
      this.tbl_data=dt
    })
  }
}
