import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
      ],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default: should create', () => {
    expect(component).toBeTruthy();
  });


  /*it(`should navigate to nocustomer`, () => {
    //component.goToAbout = [];
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/About']);
 });*/

    it('check name of the button', ()=>{
      const data = fixture.nativeElement;
      expect(data.querySelector("#Home").textContent).toBe('Home')
    })
});
