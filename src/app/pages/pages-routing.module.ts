import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'add-book',
        loadChildren: () =>
          import('./books-add/books-add.module').then((m) => m.BooksAddModule),
      },
      {
        path: 'edit-book/:id',
        loadChildren: () =>
          import('./book-edit/book-edit.module').then((m) => m.BookEditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
