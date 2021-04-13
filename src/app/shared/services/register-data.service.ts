import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterEntity } from '../models/register-entity';
import { Observable } from 'rxjs';
import { AppConfig } from '../AppConfig'

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private httpClient: HttpClient, private endPoint: AppConfig) { }

  public getData(): Observable<RegisterEntity[]> {
    return this.httpClient.get<RegisterEntity[]>(this.endPoint.endPoints.getAllBookings);
  }
}
