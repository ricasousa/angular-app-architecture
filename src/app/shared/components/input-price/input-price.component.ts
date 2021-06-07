import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPriceComponent),
      multi: true
    }
  ]
})
export class InputPriceComponent implements ControlValueAccessor, OnInit {
  @Input() showSymbol = false;
  @Input() locale = 'pt-BR';
  @Input() allowZeroAmount = false;

  @ViewChild('inputRef') inputRef: ElementRef<HTMLInputElement>;

  protected initialValue: number = 0;

  constructor() {}

  // Used by ControlValueAccessor to notify parent form
  onChange = (value: string | number) => {};
  onTouched = () => {};

  /**
   * Used by parent form to write initial value...
   * @param value - Value set on new FormControl('')
   */
  writeValue(value: string) {
    if (value) {
      this.initialValue = Number(value);
      setTimeout(() => {
        this.value = this.initialValue;
      });
    }
  }

  registerOnChange(cb: any) {
    this.onChange = cb;
  }

  registerOnTouched(cb: any) {
    this.onTouched = cb;
  }

  set value(val: number | string) {
    this.onChange(val);
    this.onTouched();
  }
  // Used by ControlValueAccessor to notify parent form

  protected currencyNumberFormatConfig() {
    let currency = '';

    if (this.locale === 'pt-BR') {
      currency = 'BRL';
    } else if (this.locale === 'en-US') {
      currency = 'USD';
    }

    return new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency
    });
  }

  protected formatValueOnTyping(value: number): string {
    const formattedValue = this.currencyNumberFormatConfig().format(
      value / 100
    );

    return this.removeSymbol(formattedValue);
  }

  protected formatValueOnInit(value: number) {
    const formattedValue = this.currencyNumberFormatConfig().format(value);

    return this.removeSymbol(formattedValue);
  }

  protected removeSymbol(value: string) {
    if (this.showSymbol) return value;

    return value.replace(/(R\$\s)|(\$)/g, '');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.inputRef.nativeElement.value = this.formatValueOnInit(
      this.initialValue
    );
  }

  protected extractNumberPartFromString(value: string) {
    return Number(value.replace(/[^0-9]/g, ''));
  }

  handleFormatCurrency(event: any) {
    const keysToSkip = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

    if (keysToSkip.includes(event.key)) {
      return;
    }

    const { value } = event.currentTarget;
    const onlyNumbers = this.extractNumberPartFromString(value);

    this.inputRef.nativeElement.value = this.formatValueOnTyping(onlyNumbers);
    this.value = onlyNumbers / 100;
  }

  setTouchedOnBlur(event: any) {
    if (this.allowZeroAmount) return;

    const { value } = event.currentTarget;
    const onlyNumber = this.extractNumberPartFromString(value);

    // Invalidate field
    if (!value || onlyNumber === 0) {
      this.value = '';
    }
  }
}
