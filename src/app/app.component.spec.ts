import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterDataService } from './shared/services/register-data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        {provide:RegisterDataService,useClass:RegisterServiceStub}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SoniBrassBand'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SoniBrassBand');
  });

  it('should have Brand as SoniBrassBand',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const brandText=fixture.debugElement.query(By.css('a'));
    expect(brandText.nativeElement.innerText).toBe('Soni Brass Band')
  });

  it('should have "a" Brand as SoniBrassBand',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const a_tag:HTMLElement=fixture.nativeElement.querySelector('a');
    expect(a_tag.textContent).toBe('Soni Brass Band');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('SoniBrassBand app is running!');
  // });
});

class RegisterServiceStub{

}
