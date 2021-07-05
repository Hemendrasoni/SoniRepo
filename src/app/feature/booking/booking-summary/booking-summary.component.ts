import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RegisterEntity } from 'src/app/shared/models/register-entity';
import { SummaryData } from 'src/app/shared/models/summary-data';
import { RegisterDataService } from 'src/app/shared/services/register-data.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  constructor(public _restCall: RegisterDataService, public _router: Router) { }

  displayedColumns: string[] = ['bookingId', 'customerName', 'venue', 'bookingDate', 'actions'];

  dataSource: SummaryData[] = [];

  searchedData: RegisterEntity[] = [];

  data: RegisterEntity;


  ngOnInit(): void {
    if (this.dataSource.length == 0) {
      this._restCall.getSummaryData().subscribe(res => {
        console.log(res);
        res.forEach(obj => {
          if (!obj.deleted) {
            this.dataSource.push(obj);
          }
        });
      })
    }
  }

  editForm(id: number) {
    this._restCall.getClientDataById(id).subscribe(res => {
      this.data = res;
      this._router.navigate(['/booking'], { state: { captureData: this.data } })
    })
  }

  deleteData(id: number) {
    this.dataSource.forEach(item => {
      if (item.id == id) {
        this.dataSource.splice(this.dataSource.indexOf(item), 1);
      }
    });
  }

  viewData(id: number) {
    this.searchedData = [];
    this._restCall.getClientDataById(id).subscribe(res => {
      this.searchedData.push(res);
    })
  }

  conatactConvert(contacts: any): string {
    let container: string[] = [];
    contacts.forEach(x => {
      container.push(x.number);
    })
    return container.join(', ');
  }

}

