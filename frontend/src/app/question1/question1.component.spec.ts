import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Question1Component } from './question1.component';

describe('Question1Component', () => {
  let component: Question1Component;
  let fixture: ComponentFixture<Question1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question1Component ],
      providers: [
        { provide: Router, useValue: "" }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default: should create', () => {
    expect(component).toBeTruthy();
  });

  it('occasions contains the required options', ()=>{
    expect(component.occasions).toContain('Watching By Myself', 'Watching a movie with Family');
    expect(component.occasions).toContain('Movie Night with Friends', 'Movie Date')
  });
  
});
