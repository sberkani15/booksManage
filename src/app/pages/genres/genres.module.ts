import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GenresComponent} from './genres.component';

     
@NgModule({
    declarations:[GenresComponent],
    exports:[GenresComponent],
    imports:[BrowserModule]
})

export class GenreModule {                                                                                      
}