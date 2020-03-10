import { Component, Inject } from '@angular/core';
import {S1Service} from "./s1.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(S1Service) public obj){
  }
}
