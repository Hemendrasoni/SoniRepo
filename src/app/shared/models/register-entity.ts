import { CustomerModel } from './customer_model';

export class RegisterEntity {
       id: number;
       DOB: Date;
       timeFrom:string;
       timeTo:string;
       booking_Id: string;
       venue: string;
       location: string;
       items: string;
       notes:string;
  
       billing_amt: string;
       advance: string;
       remaining: string;
       Customer:CustomerModel;
}
