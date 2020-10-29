import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterDataService } from './shared/services/register-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/modules/navbar/navbar.component';
import { BookingComponent } from './feature/booking/booking.component';
import { BookingSearchComponent } from './feature/booking/booking-search/booking-search.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingComponent,
    BookingSearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RegisterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
