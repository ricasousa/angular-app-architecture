import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';

import { InputPriceComponent } from './input-price.component';

import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  template: '<app-input-price [formControl]="amount"></app-input-price>'
})
class TestHostComponent {
  @ViewChild(InputPriceComponent)
  public inputPriceComponent: InputPriceComponent;

  public amount = new FormControl({
    value: null,
    disabled: false
  });
}

describe('InputPriceComponent', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPriceComponent, TestHostComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(testHostComponent.inputPriceComponent).toBeTruthy();
  });

  it('should set invalid class when field is required, has been touched, and has no value', () => {
    testHostComponent.amount.setValidators([Validators.required]);

    const hostComponentElement = hostFixture.nativeElement;
    const componentChild = hostComponentElement.querySelector(
      'app-input-price'
    );
    const inputRef: HTMLInputElement = componentChild.querySelector('input');

    inputRef.dispatchEvent(new Event('blur'));
    hostFixture.detectChanges();

    expect(componentChild.classList.contains('ng-invalid')).toBe(true);
  });

  it('should set valid class when field is required, has been touched, value is Zero and allowedZeroAmount=true', () => {
    testHostComponent.amount.setValidators([Validators.required]);
    testHostComponent.inputPriceComponent.allowZeroAmount = true;

    const hostComponentElement = hostFixture.nativeElement;
    const componentChild = hostComponentElement.querySelector(
      'app-input-price'
    );
    const inputRef: HTMLInputElement = componentChild.querySelector('input');

    inputRef.value = '0';
    inputRef.dispatchEvent(new Event('keyup'));
    inputRef.dispatchEvent(new Event('blur'));
    hostFixture.detectChanges();

    // My Debug...
    console.log(testHostComponent.amount.value);

    expect(componentChild.classList.contains('ng-invalid')).toBe(false);
  });

  it('should set invalid class when field is required, has been touched, value is Zero and not allowed zero amount', () => {
    testHostComponent.amount.setValidators([Validators.required]);
    testHostComponent.inputPriceComponent.allowZeroAmount = false;

    const hostComponentElement = hostFixture.nativeElement;
    const componentChild = hostComponentElement.querySelector(
      'app-input-price'
    );
    const inputRef: HTMLInputElement = componentChild.querySelector('input');

    inputRef.value = '0';
    inputRef.dispatchEvent(new Event('keyup'));
    inputRef.dispatchEvent(new Event('blur'));
    hostFixture.detectChanges();

    // My Debug...
    console.log(testHostComponent.amount.value);

    expect(componentChild.classList.contains('ng-invalid')).toBe(true);
  });
});
