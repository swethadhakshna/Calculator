import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add two numbers', () => {
    component.operand1 = 3;
    component.operand2 = 5;
    component.add();
    expect(component.result).toBe(8);
  });

  it('should subtract two numbers', () => {
    component.operand1 = 10;
    component.operand2 = 4;
    component.subtract();
    expect(component.result).toBe(6);
  });

  it('should divide two numbers', () => {
    component.operand1 = 20;
    component.operand2 = 4;
    component.divide();
    expect(component.result).toBe(5);
  });

  it('should multiply two numbers', () => {
    component.operand1 = 7;
    component.operand2 = 6;
    component.multiply();
    expect(component.result).toBe(42);
  });
});