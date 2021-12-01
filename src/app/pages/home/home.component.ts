import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmittersService } from 'src/app/services/emitters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchString!: string;
  books!: any;
  allBooks!: any;
  seeAll: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private emitterService: EmittersService
  ) {
    this.emitterService.changeEmitted$.subscribe((event) => {
      this.search(event);
      event == '' ? (this.seeAll = false) : (this.seeAll = true);
    });
  }

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((e) => {
      this.allBooks = e;
      this.books = this.allBooks;
    });
  }

  search(searchFilter: string) {
    if (searchFilter == 'Todos' || !searchFilter) {
      this.books = this.allBooks;
      return;
    }

    this.books = this.allBooks.filter((current: any) => {
      return Object.values(current)
        .toString()
        .toLowerCase()
        .includes(searchFilter.toString().toLowerCase());
    });
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
        this.allBooks = this.allBooks.filter((current: any) => {
          return current.id != id;
        });
      }
    });
  }
  edit(id: string) {
    this.router.navigate(['/home/edit-book', id]);
  }
}
