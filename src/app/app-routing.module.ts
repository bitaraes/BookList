import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)},
  {path: "add-book", loadChildren: () => import('./pages/books-add/books-add.module').then((m) => m.BooksAddModule)},
  {path: "edit-book/:id", loadChildren: () => import('./pages/book-edit/book-edit.module').then((m) => m.BookEditModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
