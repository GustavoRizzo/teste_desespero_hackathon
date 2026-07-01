import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /*Indica o ambiente que está sendo executado*/
  public API_URL = environment.API_URL;

  constructor() { }

  ngOnInit() {
  }

}
