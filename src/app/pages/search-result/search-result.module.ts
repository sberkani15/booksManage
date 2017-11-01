import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result.component';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[SearchResultComponent],
    imports:[BrowserModule, FormsModule],
    exports:[SearchResultComponent]
})


export class SearchResultModule {

}
