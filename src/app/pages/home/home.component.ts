import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books!: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((e) => {
      this.books = e;
    });
  }
  delete(id: string){
    this.apiService.deleteBook(id).subscribe(()=> window.location.reload())
  }
  edit(id: string){
    console.log(id);
    this.router.navigate(['/edit-book', id])
  };
}
