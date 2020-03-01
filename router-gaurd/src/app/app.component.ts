import { Component, Inject } from '@angular/core';
import { GaurdService } from './gaurd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-gaurd';
  constructor(@Inject(GaurdService) public obj){}
}
