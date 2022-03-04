import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmovieComponent } from './showmovie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShowmovieComponent', () => {
  let component: ShowmovieComponent;
  let fixture: ComponentFixture<ShowmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule],
      declarations: [ ShowmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default: should create', () => {
    expect(component).toBeTruthy();
  });
});
