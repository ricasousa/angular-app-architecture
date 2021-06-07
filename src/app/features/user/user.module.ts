import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from '@shared/shared.module';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
