import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksAddComponent } from "./books-add.component";

const routes: Routes = [
  {path: '', component: BooksAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksAddRoutingModule { }
