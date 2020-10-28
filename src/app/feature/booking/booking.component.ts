import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  fromTime: Date = new Date();
  toTime: Date = new Date();
  allowMouseWheel = true;



  constructor() { }

  ngOnInit(): void {

  }

}