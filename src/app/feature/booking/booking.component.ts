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
  contacts:any[]=[];
  con_num:any;


  constructor() { }

  selected: string;
  states = [
    'DJ Band',
    'Brass Band',
    'Doli',
    'Atishbaji',
    'Bhangra',
    'Baghi',
    'Victoria Baghi',
    'Bahu bali Baghi',
    'Shenai',
    'Nikasi with 2 Band Member',
    'Ghodi',
  ];

  addContact(){
    if (this.con_num) {
      this.contacts.push(this.con_num);
      this.con_num='';
    }
   
  }
  removeContact(index:number)
  {
    this.contacts.splice(index,1);
  }

  ngOnInit(): void {

  }

}