import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books!: any;
  allBooks!: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((e) => {
      this.allBooks = e;
      this.books = this.allBooks;
    });
  }
  search(searchFilter: any) {
    searchFilter = searchFilter.value;
    if (searchFilter == 'Todos') {
      this.books = this.allBooks;
      return;
    }

    this.books = this.allBooks.filter((current: any) => {
      return Object.values(current)
        .toString()
        .toLowerCase()
        .includes(searchFilter.toString().toLowerCase());
    });
    console.log(this.books);
  }

  delete(id: string) {
    this.books = this.books.filter((current: any) => {
      return current.id != id;
    });
    this.apiService.deleteBook(id).subscribe((res: any) => {
      if (res.status == 200) {
        this.books = this.books.filter((current: any) => {
          return current.id != id;
        });
      }
    });
  }
  edit(id: string) {
    console.log(id);
    this.router.navigate(['/home/edit-book', id]);
  }
}
