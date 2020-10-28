import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterEntity } from '../models/register-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private httpClient: HttpClient) { }

  public getData():Observable<RegisterEntity[]> {
    return this.httpClient.get<RegisterEntity[]>('./assets/mockData/mockRegisterData.json');
  }
}
