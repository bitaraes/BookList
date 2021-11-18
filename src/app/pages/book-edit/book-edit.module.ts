import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookEditRoutingModule } from './book-edit-routing.module';
import { BookEditComponent } from './book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookEditComponent
  ],
  imports: [
    CommonModule,
    BookEditRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookEditModule { }
