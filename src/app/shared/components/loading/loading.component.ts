import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() width = '50px';
  @Input() height = '50px';
  @Input() overlay = false;

  styles: any = {};

  constructor() {}

  ngOnInit(): void {
    this.styles = {
      width: this.width,
      height: this.height
    };
  }
}
