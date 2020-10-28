import { Component, OnInit } from '@angular/core';
import { RegisterDataService } from './shared/services/register-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SoniBrassBand';
  

  constructor() { }

  ngOnInit(): void {
    
  }

 
}
