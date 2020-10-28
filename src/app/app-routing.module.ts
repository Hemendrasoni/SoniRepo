import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingSearchComponent } from './feature/booking/booking-search/booking-search.component';
import { BookingComponent } from './feature/booking/booking.component';


const routes: Routes = [
  {path:'',component:BookingSearchComponent,pathMatch:"full"},
  {path:'booking-search',component:BookingSearchComponent},
  {path:'booking',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
