import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMovieDialogeComponent } from './app-movie-dialoge.component';



describe('AppMovieDialogeComponent', () => {
  let component: AppMovieDialogeComponent;
  let fixture: ComponentFixture<AppMovieDialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMovieDialogeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMovieDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
