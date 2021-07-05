import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterEntity } from '../models/register-entity';
import { Observable } from 'rxjs';
import { SummaryData } from '../models/summary-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private httpClient: HttpClient) { }

  _getUrl = "http://localhost:8090/bookingInfo/getAll";
  _saveUrl = "http://localhost:8090/bookingInfo/saveOne";
  _getSummaryData = "http://localhost:8090/bookingInfo/getAllSummary";
  _getClientDataById="http://localhost:8090/bookingInfo/getOne/";

  public getData(): Observable<RegisterEntity[]> {
    return this.httpClient.get<RegisterEntity[]>(this._getUrl);
  }
  public saveData(booking:RegisterEntity): Observable<RegisterEntity>
  {
    return this.httpClient.post<RegisterEntity>(this._saveUrl,booking);
  }
  public getSummaryData():Observable<SummaryData[]>{
    return this.httpClient.get<SummaryData[]>(this._getSummaryData);
  }
  public getClientDataById(id:number):Observable<RegisterEntity>{
    return this.httpClient.get<RegisterEntity>(this._getClientDataById+`${id}`);   
  }
}
