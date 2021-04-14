import { ContactModel } from './contact_model';
import { CustomerModel } from './customer_model';

export class RegisterEntity {
       id: number;
       customerName:string;
       contact : ContactModel[];
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
