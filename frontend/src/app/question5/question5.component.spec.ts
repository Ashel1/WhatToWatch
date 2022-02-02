import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Question5Component } from './question5.component';

describe('Question5Component', () => {
  let component: Question5Component;
  let fixture: ComponentFixture<Question5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Question5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Question5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
