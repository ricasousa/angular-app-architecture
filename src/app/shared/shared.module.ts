import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputPriceComponent } from './components/input-price/input-price.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingComponent } from './components/loading/loading.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
  declarations: [
    InputPriceComponent,
    ButtonComponent,
    LoadingComponent,
    OnlyNumbersDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    InputPriceComponent,
    ButtonComponent,
    OnlyNumbersDirective
  ]
})
export class SharedModule {}
