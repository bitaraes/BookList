import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { InvalidFieldMessageModule } from '../components/invalid-field-message/invalid-field-message.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, InvalidFieldMessageModule],
})
export class AuthModule {}
