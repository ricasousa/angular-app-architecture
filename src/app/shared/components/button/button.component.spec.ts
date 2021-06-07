import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

const buttonText = 'Save';

@Component({
  template: `<app-button>${buttonText}</app-button>`
})
class ButtonHostComponent {
  @ViewChild(ButtonComponent)
  public buttonComponent: ButtonComponent;
}

describe('ButtonComponent', () => {
  let hostFixture: ComponentFixture<ButtonHostComponent>;
  let buttonHostComponent: ButtonHostComponent;
  let buttonRef: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonHostComponent, ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    hostFixture = TestBed.createComponent(ButtonHostComponent);
    buttonHostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();

    const buttonComponentEl = hostFixture.nativeElement.querySelector(
      'app-button'
    );
    buttonRef = buttonComponentEl.querySelector('button');
  });

  it('should be create the button', () => {
    expect(buttonHostComponent.buttonComponent).toBeTruthy();
  });

  it('should render text passed between tags in it', () => {
    expect(buttonRef.innerText).toContain(buttonText);
  });

  it('should emit callback event', () => {
    const onClickSpy = spyOn(
      buttonHostComponent.buttonComponent.onClick,
      'emit'
    );
    buttonHostComponent.buttonComponent.handleClick();

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should apply theme supplied', () => {
    buttonHostComponent.buttonComponent.theme = 'success';
    hostFixture.detectChanges();

    const appliedClassOnTheme = 'btn-success';

    expect(buttonRef.classList.contains(appliedClassOnTheme)).toBeTrue();
  });
});
