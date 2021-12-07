import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAddComponent } from './books-add.component';
import { BooksAddRoutingModule } from './books-add.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [BooksAddComponent],
  imports: [
    CommonModule,
    BooksAddRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [BooksAddComponent],
})
export class BooksAddModule {}
