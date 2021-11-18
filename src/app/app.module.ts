import { HeaderModule } from './components/header/header.module';
import { RouterModule } from '@angular/router';
import { BooksAddModule } from './pages/books-add/books-add.module';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvalidFieldMessageComponent } from './components/invalid-field-message/invalid-field-message.component';

@NgModule({
  declarations: [
    AppComponent,
    InvalidFieldMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterModule,
    BooksAddModule,
    HeaderModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
