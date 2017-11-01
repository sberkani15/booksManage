//Used Libraries
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenresComponent } from './pages/genres/genres.component';
import { BookSearchComponent } from './pages/book-search/book-serarch.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';



//Project Libraries
export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: BookSearchComponent},
    {path:'genres', component: GenresComponent},
    {path:'resultats', component:SearchResultComponent}
    
];