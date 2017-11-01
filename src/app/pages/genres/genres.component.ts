import { Component } from '@angular/core';
import {BooksService} from '../../services/books-service';


@Component({
    selector:'book-genre',
    templateUrl:'./genres.component.html'
})


export class GenresComponent{
    private listGenres:Array<any>=[];

    constructor(private _booksService:BooksService){

    }

    ngOnInit(){
        this._booksService.get_genres().subscribe()
            res=>{
                this.listGenres=res;
                console.log(this.listGenres)
            }
    }

}