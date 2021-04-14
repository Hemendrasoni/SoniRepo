import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterEntity } from '../models/register-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private httpClient: HttpClient) { }

  _getUrl = "http://localhost:8090/bookingInfo/getAll";
  _saveUrl = "http://localhost:8090/bookingInfo/saveOne"

  public getData(): Observable<RegisterEntity[]> {
    return this.httpClient.get<RegisterEntity[]>(this._getUrl);
  }
  public saveData(booking:RegisterEntity): Observable<RegisterEntity>
  {
    return this.httpClient.post<RegisterEntity>(this._saveUrl,booking);
  }
}
