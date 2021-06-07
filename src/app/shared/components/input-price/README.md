# Input Price Component

Component created to format money values on typing using javascript `Intl.NumberFormat` API. Works just in combination with Angular ReactiveForms.

_This component uses `ControlValueAccessor` that allows us to create a **Custom Form Control** component to be used with Angular ReactiveForms passing a `formControlName`._

# How to use?

```html
<app-input-price
  [showSymbol]="true|false"
  locale="en-US | pt-BR"
  formControlName="amount">
</app-input-price>
<!-- 
  locale = en-US
  Amount: 1589.9
  Output: $1,589.90

  locale = pt-BR
  Amount: 1589.9
  Output: R$1.589,90
-->
```

```javascript
yourForm = {} as FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.yourForm = this.formBuilder.group({
    amount: [null, Validators.required]
  });

  // Output:
  // this.yourForm.amount = 1589.9
}
```

## Attributes

| Name       | Type      | Description                                | Default Value |
| ---------- | --------- | ------------------------------------------ | ------------- |
| showSymbol | `boolean` | Indicates if currency sign will be showing | `false`       |
| locale     | `string`  | Language to format amount.                 | `pt-BR`       |
