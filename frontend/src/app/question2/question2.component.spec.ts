import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2Component } from './question2.component';
import { Router } from '@angular/router';

describe('Question2Component', () => {
  let component: Question2Component;
  let fixture: ComponentFixture<Question2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question2Component ],
      providers: [
        { provide: Router, useValue: "" }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default: should create', () => {
    expect(component).toBeTruthy();
  });
});
