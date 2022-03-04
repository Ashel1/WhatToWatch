import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: Router, useValue: "" }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default: should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('check name of the button', ()=>{
    const data = fixture.nativeElement;
    expect(data.querySelector("#start").textContent).toBe('Start your Search')
  })*/

  it('should call goToQuestions() function to navigate to Question 1', () => {
    spyOn(component, 'goToQuestions');
    fixture.detectChanges();
    const data = fixture.nativeElement;
    let button = data.querySelector("#start");
    button.click();
    fixture.detectChanges();
    expect(component.goToQuestions).toHaveBeenCalled();
  });
});
