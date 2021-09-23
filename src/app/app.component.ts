import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private documentRef: Document,
    private render: Renderer2
  ) {
    this.render.addClass(this.documentRef.body, 'some-class');
  }
}
