import { InvalidFieldMessageComponent } from './invalid-field-message.component';
import { NgxBootstrapIconsModule, search, trash } from 'ngx-bootstrap-icons';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InvalidFieldMessageComponent],
  imports: [CommonModule],
  exports: [InvalidFieldMessageComponent],
})
export class InvalidFieldMessageModule {}
