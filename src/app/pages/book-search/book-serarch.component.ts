import { Component } from '@angular/core';
import { Book } from '../../models/book-model'


@Component({
    selector:'book-search',
    templateUrl:'./book-search.component.html'
})


export class BookSearchComponent{
    book:Book;

    constructor(){
        this.book= new Book();
    }

     search_book(){
        console.info(this.book);
    }

}