import {Artist} from './artists.component';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class ArtistService {
    url: string = 'http://localhost:3004/root';
    constructor(private _http: Http) {

    }
    getArtists(): Observable<Artist[]> { //Artist[]

        return this._http.get(this.url).
        map((response: Response) => <Artist[]> response.json()).
        do(data => console.log('All ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response ) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}