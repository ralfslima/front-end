import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg4Component } from './pg4.component';

describe('Pg4Component', () => {
  let component: Pg4Component;
  let fixture: ComponentFixture<Pg4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
