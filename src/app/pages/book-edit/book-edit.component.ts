import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  bookId: string | null = this._route.snapshot.paramMap.get('id');
  bookInfo: any = { bookName: '', price: '', category: '', author: '' };
  editBook!: FormGroup;
  editingDisabled: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  async ngOnInit() {
    this.editBook = this.formBuilder.group({
      bookName: [null, [Validators.required]],
      price: [null, Validators.required],
      category: [null, Validators.required],
      author: [null, Validators.required],
      id: this.bookId,
    });
    this.apiService.getBook(this.bookId!).subscribe((book: any) =>
      this.editBook.patchValue({
        bookName: book.bookName,
        price: book.price,
        category: book.category,
        author: book.author,
        id: this.bookId,
      })
    );
  }
  enableEditing() {
    this.editingDisabled = false;
  }

  edit() {
    this.apiService.updateBook(this.bookId!, this.editBook.value).subscribe(
      () => this.router.navigate(['/home']),
      (err) => console.log(err)
    );
  }
}
