import { CustomerModel } from './customer_model';

export class RegisterEntity {
       id: number;
       // DOB: Date;
       // timeFrom:string;
       // timeTo:string;
       // booking_Id: string;
       // venue: string;
       // location: string;
       // items: string;
       // notes:string;
  
       // billing_amt: string;
       // advance: string;
       // remaining: string;
       // Customer:CustomerModel;
       customerName:string;
       contactNumber : string[];
       bookingDate : Date;
       timeFrom: string;
       timeTo : string;
       adv_amnt: string;
       bill_amnt: string;
       remaining_amnt: string;
       hotelAddress: string;
       venueAddress: string;
       localAddress: string;
       items: string;
       note: string
}
