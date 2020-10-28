import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RegisterDataService } from './register-data.service';

describe('RegisterDataService', () => {
  let service: RegisterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(RegisterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
