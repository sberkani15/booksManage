import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BookSearchComponent} from './book-serarch.component';
import { FormsModule } from '@angular/forms';

     
@NgModule({
    declarations:[BookSearchComponent],
    exports:[BookSearchComponent],
    imports:[BrowserModule, FormsModule]
})

export class BookSearchModule {                                                                                      
}