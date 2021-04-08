import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterEntity } from 'src/app/shared/models/register-entity';
import { RegisterDataService } from 'src/app/shared/services/register-data.service';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.css']
})
export class BookingSearchComponent implements OnInit {

  date: Date = new Date();
  searchDate: any;
  dataVisible: boolean = false;
  RegisterData: RegisterEntity[] = [];
  searchedData: RegisterEntity[] = [];
  pipe = new DatePipe('en-US')

  constructor(private service: RegisterDataService,public _router : Router) {

  }

  ngOnInit(): void {
    this.service.getData().subscribe((response) => {
      this.RegisterData = response;
      console.log(response);
    })
  }

  clearSearchDate() {
    this.searchDate = '';
    this.searchedData = [];
  }

  editForm(data:any)
  {
    // console.log(data)
    this._router.navigate(['/booking'],{state:{captureData:data}})
  }

  triggerData(event) {
    this.searchedData = [];
    const date = this.pipe.transform(event, 'dd/MM/yyyy')
    this.RegisterData.forEach((item) => {
      let comDate = this.pipe.transform(item.bookingDate, 'dd/MM/yyyy');
      if (date === comDate) {
        this.searchedData.push(item);
      }
    })
    console.log(this.searchedData);
  }
  numConvert(num: string) {
    return Number(num);
  }

}
