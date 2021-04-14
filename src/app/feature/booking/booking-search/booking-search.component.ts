import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactModel } from 'src/app/shared/models/contact_model';
import { RegisterEntity } from 'src/app/shared/models/register-entity';
import { RegisterDataService } from 'src/app/shared/services/register-data.service';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.css']
})
export class BookingSearchComponent implements OnInit {

  date: Date = new Date();
  searchDate: any = null;
  dataVisible: boolean = false;
  RegisterData: RegisterEntity[] = [];
  searchedData: RegisterEntity[] = [];
  pipe = new DatePipe('en-US')

  constructor(private service: RegisterDataService, public _router: Router) { }

  ngOnInit(): void {
    this.service.getData().subscribe((response) => {
      this.RegisterData = response;
      console.log(response);
    })
  }

  conatactConvert(contacts: any): string {
    let container:string[] = [];
    contacts.forEach(x => {
      container.push(x.number);
    })
    return container.join(', ');
  }

  clearSearchDate() {
    this.searchDate = '';
    this.searchedData = [];
  }

  editForm(data: any) {
    this._router.navigate(['/booking'], { state: { captureData: data } })
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
