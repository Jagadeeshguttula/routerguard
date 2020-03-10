import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe1';
  no=12345
  dt=new Date()
  x={uname:"scott",city:"hyd"}
}
