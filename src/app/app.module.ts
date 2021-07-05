import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDataService } from './shared/services/register-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/modules/navbar/navbar.component';
import { BookingComponent } from './feature/booking/booking.component';
import { BookingSearchComponent } from './feature/booking/booking-search/booking-search.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ToastrModule } from 'ngx-toastr';
import { BookingSummaryComponent } from './feature/booking/booking-summary/booking-summary.component';
import { MatModuleRepositoryModule } from './shared/modules/mat-module-repository/mat-module-repository.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingComponent,
    BookingSearchComponent,
    BookingSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatModuleRepositoryModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [RegisterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
