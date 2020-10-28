import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private service: RegisterDataService) {

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

  triggerData(event) {
    this.searchedData = [];
    const date = this.pipe.transform(event, 'dd/MM/yyyy')
    this.RegisterData.forEach((item) => {
      let comDate = this.pipe.transform(item.DOB, 'dd/MM/yyyy');
      if (date === comDate) {
        this.searchedData.push(item);
      }
    })
    console.log(date);
  }
  numConvert(num: string) {
    return Number(num);
  }

}
