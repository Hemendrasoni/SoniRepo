import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from 'src/app/shared/models/contact_model';
import { CustomerModel } from 'src/app/shared/models/customer_model';
import { RegisterEntity } from 'src/app/shared/models/register-entity';
import { RegisterDataService } from 'src/app/shared/services/register-data.service';
import * as moment from 'moment';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  booking_obj: RegisterEntity;
  customer_obj: CustomerModel;
  contact_obj: ContactModel;
  submitted = false;
  fromTime: Date = new Date();
  toTime: Date = new Date();
  allowMouseWheel = true;
  // contacts: any[] = [];
  contact: ContactModel[] = [];
  editData: RegisterEntity = null;
  con_num: any;
  selected: string;
  states = [
    'DJ Band',
    'Brass Band',
    'Doli',
    'Atishbaji',
    'Bhangra',
    'Baaghi',
    'Victoria Baghi',
    'Bahu bali Baghi',
    'Shenai',
    'Nikasi with 2 Band Member',
    'Ghodi',
  ];



  constructor(private formBuilder: FormBuilder, public route: ActivatedRoute, public _router: Router, public _restCall: RegisterDataService, public notify: NotificationService) {
    this.editData = this._router.getCurrentNavigation().extras.state?.captureData;
    console.log(this.editData)
  }

  get f() { return this.bookingForm.controls; }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group(
      {
        customerName: ['', Validators.required],
        bookingDate: ['', Validators.required],
        contact: [null, Validators.required],
        timeFrom: ['', Validators.required],
        timeTo: ['', Validators.required],
        items: ['', Validators.required],
        venueAddress: ['', Validators.required],
        hotelAddress: ['', Validators.required],
        bill_amnt: ['', Validators.required],
        adv_amnt: ['', Validators.required],
        remaining_amnt: ['', Validators.required],
        localAddress: ['', Validators.required],
        note: ['', Validators.required],
      }
    )

    if (this.editData != null) {
      this.bookingForm.patchValue({
        customerName: this.editData.customerName,
        bookingDate: new Date(this.editData.bookingDate),
        timeFrom: new Date(this.editData.timeFrom),
        timeTo: new Date(this.editData.timeTo),
        items: this.editData.items,
        venueAddress: this.editData.venueAddress,
        hotelAddress: this.editData.hotelAddress,
        bill_amnt: this.editData.bill_amnt,
        adv_amnt: this.editData.adv_amnt,
        remaining_amnt: this.editData.remaining_amnt,
        localAddress: this.editData.localAddress,
        note: this.editData.note,
      });
      this.contact = this.editData.contact;
    }
    this.booking_obj = new RegisterEntity();
    this.customer_obj = new CustomerModel();
    this.contact_obj = new ContactModel();
  }

  addContact() {
    if (this.bookingForm.get('contact').value && !this.contact.includes(this.bookingForm.get('contact').value)) {
      this.contact_obj.number = this.bookingForm.get('contact').value;
      this.contact.push(this.contact_obj);
      this.bookingForm.get('contact').setValue('');
    }
  }
  removeContact(index: number) {
    this.contact.splice(index, 1);
  }
  Objmapper() {

  }

  onSubmit() {
    this.bookingForm.patchValue({
      contact: this.contact,
      bookingDate: moment(new Date(this.bookingForm.get('bookingDate').value)).format("YYYY-MM-DD HH:mm:ss"),
      timeFrom: moment(new Date(this.bookingForm.get('timeFrom').value)).format("YYYY-MM-DD HH:mm:ss"),
      timeTo: moment(new Date(this.bookingForm.get('timeTo').value)).format("YYYY-MM-DD HH:mm:ss"),
    });
    console.log(this.bookingForm.value);
    this._restCall.saveData(<RegisterEntity>this.bookingForm.value).subscribe((res) => {
      this.notify.showSuccess("Data Saved Successfully!!", "Thanks for Booking!")
    })
    // this.bookingForm.reset();
  }



  onReset() {
    this.submitted = false;
  }
}
