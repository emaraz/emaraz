import {Artist} from './artists.component';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class ArtistService {
    artists: Artist[];
    url: string = 'http://localhost:3004/root';
    constructor(private _http: Http) {

    }
    getArtists(): Observable<Artist[]> { //Artist[]

        return this._http.get(this.url).
        map((response: Response) => this.artists = <Artist[]> response.json()).
        do(data => console.log('All ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    addArtist(artist: Artist){
      let headers = new Headers({'Content-Type':'application/json'})
      let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this._http.post(this.url, artist, options) // ...using put request
                         .map((res:Response) => this.artists = <Artist[]>res.json()) // ...and calling .json() on the response to return data
                         .do((root) => console.log('New data'+JSON.stringify(this.artists)))
                         .catch(this.handleError);
    }

    private handleError(error: Response ) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}