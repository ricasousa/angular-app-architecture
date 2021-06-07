import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';
//type ButtonSize = 'small' | 'regular' | 'large';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() theme: ButtonTheme = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() loading = false;
  @Input() disabled = false;
  //@Input() size: ButtonSize = 'regular';
  @Input() block = false;

  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // if (this.size === 'regular') {
    // }
  }

  handleClick() {
    this.onClick.emit();
  }
}
