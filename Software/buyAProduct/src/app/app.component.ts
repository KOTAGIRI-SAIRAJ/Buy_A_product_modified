import { Component } from '@angular/core';
import {Router} from "@angular/router";
//import {Popup} from 'ng2-popups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buy A Product !';
  public router: Router;
  constructor(private route: Router) {  }
}
