import { Component, OnInit } from '@angular/core';
import { GaurdService } from '../gaurd.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private obj:GaurdService) {
 obj.tmp=true;
    localStorage.clear()
   }

  ngOnInit() {
  }

}
