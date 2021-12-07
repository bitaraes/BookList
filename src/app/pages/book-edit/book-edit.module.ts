import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookEditRoutingModule } from './book-edit-routing.module';
import { BookEditComponent } from './book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [BookEditComponent],
  imports: [
    CommonModule,
    BookEditRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class BookEditModule {}
