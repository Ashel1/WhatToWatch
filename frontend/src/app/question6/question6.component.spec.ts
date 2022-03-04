import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question6Component } from './question6.component';
import { Router } from '@angular/router';

describe('Question6Component', () => {
  let component: Question6Component;
  let fixture: ComponentFixture<Question6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question6Component ],
      providers: [
        { provide: Router, useValue: "" }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default: should create', () => {
    expect(component).toBeTruthy();
  });
});
