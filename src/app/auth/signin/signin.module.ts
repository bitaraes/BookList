import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SigninModule {}
