import { Component,OnInit, DoCheck, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck,AfterViewInit{
sno=100
  ngOnInit(){
  console.log("Comp init...")
}
ngDoCheck(){
  console.log("Data updating...")
}
ngAfterViewInit(){
  console.log("View Init...")
}
ngAfterViewChecked(){
  console.log("View updated...")
}
ngOnDestroy(){
  console.log("comp dest...")
}
}
