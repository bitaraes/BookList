import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books!: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((e) => {
      this.books = e;
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
      }
    });
  }
  edit(id: string) {
    console.log(id);
    this.router.navigate(['/home/edit-book', id]);
  }
}
