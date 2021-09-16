import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegisterPasswordComponent } from './employee-register-password.component';

describe('EmployeeRegisterPasswordComponent', () => {
  let component: EmployeeRegisterPasswordComponent;
  let fixture: ComponentFixture<EmployeeRegisterPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegisterPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegisterPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
