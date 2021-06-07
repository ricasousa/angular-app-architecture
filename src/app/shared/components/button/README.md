# Button Component

Componente criado para encapsular as implementações do framework bootstrap

# How to use?

```html
<app-button
  type="button | submit | reset"
  theme="primary | secondary | success | danger | warning | info | light | dark"
  loading="true | false"
  disabled="true | false"
  block="true | false"
  (onClick)="callbackFunction()">
  <!-- Your content here -->
</app-button>
```

## Attributes

| Name     | Type       | Description                                         | Default Value |
| -------- | ---------- | --------------------------------------------------- | ------------- |
| type     | `string`   | HTML Button Types availables                        | `button`      |
| theme    | `string`   | Bootstrap theme buttons                             | `primary`     |
| loading  | `boolean`  | Indicates if the loading icon should show on button | `false`       |
| disabled | `boolean`  | Disable button                                      | `false`       |
| block    | `boolean`  | When `true` the button fills fully available space  | `false`       |
| onClick  | `function` | Callback to click event                             | -             |
