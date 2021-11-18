import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAddComponent } from './books-add.component';
import { BooksAddRoutingModule } from './books-add.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BooksAddComponent
  ],
  imports: [
    CommonModule, BooksAddRoutingModule, ReactiveFormsModule
  ],
  exports: [BooksAddComponent]
})
export class BooksAddModule { }
