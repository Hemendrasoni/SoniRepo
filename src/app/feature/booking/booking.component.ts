import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from 'src/app/shared/models/contact_model';
import { CustomerModel } from 'src/app/shared/models/customer_model';
import { RegisterEntity } from 'src/app/shared/models/register-entity';

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
  contacts: any[] = [];
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



  constructor(private formBuilder: FormBuilder) {

  }

  get f() { return this.bookingForm.controls; }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group(
      {
        customerName: ['', Validators.required],
        bookingDate: ['', Validators.required],
        contactNumber: ['', Validators.required],
        timeFrom: ['', Validators.required],
        timeTo: ['', Validators.required],
        items:['',Validators.required],
        venueAddress: ['', Validators.required],
        hotelAddress: ['', Validators.required],
        bill_amnt: ['', Validators.required],
        adv_amnt: ['', Validators.required],
        remaining_amnt: ['', Validators.required],
        localAddress: ['', Validators.required],
        note: ['', Validators.required],
      }
    )
    this.booking_obj=new RegisterEntity();
    this.customer_obj=new CustomerModel();
    this.contact_obj=new ContactModel();
  }

  addContact() {
    if (this.bookingForm.get('contactNumber').value && !this.contacts.includes(this.bookingForm.get('contactNumber').value)) {
      this.contacts.push(this.bookingForm.get('contactNumber').value);
      this.bookingForm.get('contactNumber').setValue('');
    }
  }
  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }
  Objmapper() {
    
  }

  onSubmit(bookingObj:any) {
    // this.submitted = true;
    // this.Objmapper();
    // console.log(bookingObj.controls);
    console.log(this.bookingForm.value);
  }

  onReset() {
    this.submitted = false;
  }
}
