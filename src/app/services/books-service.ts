import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()


export class BooksService {

    constructor(private _http:Http){

    }

    public get_genres():Observable<any>{
        return this._http.get('http://localhost:3000/api/genres').map(
            (res:Response) => res.json()
        ).catch((error:any) => Observable.throw('Server error'))
    }

}