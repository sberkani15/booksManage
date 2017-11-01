import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import {AppComponent} from './app.component';
import {BooksService} from './services/books-service';
import {GenreModule} from './pages/genres/genres.module';
import {BookSearchModule} from './pages/book-search/book-search.module';
import {SearchResultModule} from './pages/search-result/search-result.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SearchResultModule,
    BookSearchModule,
    GenreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
