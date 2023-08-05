import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg6Component } from './pg6.component';

describe('Pg6Component', () => {
  let component: Pg6Component;
  let fixture: ComponentFixture<Pg6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pg6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
