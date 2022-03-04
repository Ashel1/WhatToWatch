import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmovieComponent } from './showmovie.component';

describe('ShowmovieComponent', () => {
  let component: ShowmovieComponent;
  let fixture: ComponentFixture<ShowmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
