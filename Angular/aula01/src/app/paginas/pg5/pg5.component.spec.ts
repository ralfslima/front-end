import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pg5Component } from './pg5.component';

describe('Pg5Component', () => {
  let component: Pg5Component;
  let fixture: ComponentFixture<Pg5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pg5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
