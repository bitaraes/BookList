import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAddComponent } from './books-add.component';
import { BooksAddRoutingModule } from './books-add.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFieldMessageModule } from 'src/app/components/invalid-field-message/invalid-field-message.module';

@NgModule({
  declarations: [BooksAddComponent],
  imports: [
    CommonModule,
    BooksAddRoutingModule,
    ReactiveFormsModule,
    InvalidFieldMessageModule,
  ],
  exports: [BooksAddComponent],
})
export class BooksAddModule {}
