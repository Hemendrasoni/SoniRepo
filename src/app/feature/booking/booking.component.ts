import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
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



  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.bookingForm.controls; }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group(
      {
        customerName: ['', Validators.required],
        bookingDate: ['', Validators.required],
        contactNumber: ['', Validators.required],
        timeFrom: [new Date, Validators.required],
        timeTo: [new Date, Validators.required],
        members: [[], Validators.required],
        venueAddress: ['', Validators.required],
        hotelAddress: ['', Validators.required],
        bill_amnt: ['', Validators.required],
        adv_amnt: ['', Validators.required],
        remaining_amnt: ['', Validators.required],
        localAddress: ['', Validators.required],
        note: ['', Validators.required],
      }
    )
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

  onSubmit() {
    this.submitted = true;
    console.log(this.bookingForm.value);
  }

  onReset()
  {
    this.submitted=false;
    this.bookingForm.reset;
  }

}