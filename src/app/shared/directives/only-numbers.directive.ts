import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {
  @HostListener('keydown', ['$event'])
  onlyNumbers(event: KeyboardEvent) {
    const keysAllowed = [
      'Delete',
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'End',
      'Home',
      'Tab'
    ];

    if (keysAllowed.includes(event.key) || /[0-9]/.test(event.key)) {
      return true;
    }

    event.preventDefault();

    return false;
  }
}
