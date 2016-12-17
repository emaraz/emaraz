import {Artist} from './artists.component';
import {ARTISTS} from './mock-artists';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class ArtistService {
    url: string = 'app/api/artists.json';
    constructor(private _http: Http) {
      //  this.sendArtists();

    }
    getArtists(): Observable<Artist[]> { //Artist[]

        return this._http.get(this.url).
        map((response: Response) => <Artist[]> response.json()).
        do(data => console.log('All ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getArtist(id: number): Artist {

        return ARTISTS[id];
    }

    /*sendArtists(): void {
        this._http.post(this.url, [
  {
      "id": 1, "name": "Guns N Roses", "genre": "Rock",
    "imgUrl": "http://cdn.gunsnroses.com//non_secure/images/20161204/gunsnroses_instagram_1080x1080_static1480917980/large.jpg",
    "starRating": 5
  },
  {
    "id": 2, "name": "Pink Floyd", "genre": "Rock",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    "starRating": 5
  },
  {
    "id": 3, "name": "Led Zeppelin", "genre": "Rock",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Led_Zeppelin_logo.svg/2000px-Led_Zeppelin_logo.svg.png",
    "starRating": 4
  },
  {
    "id": 4, "name": "Blink-182", "genre": "Rock",
    "imgUrl": "http://vignette3.wikia.nocookie.net/blink182universe/images/8/8e/B182.png/revision/latest?cb=201111060550411",
    "starRating": 5
  },
  {
    "id": 5, "name": "Eminem", "genre": "Rap",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/de/1/1a/Eminem_-_Logo_2013.jpg",
    "starRating" : 4.5
  },
  {
    "id": 6, "name": "2Pac", "genre": "Rap",
    "imgUrl": "http://orig11.deviantart.net/a7e9/f/2013/365/9/3/tupac_shakur_logo_by_creepncrawl-d356axi.png",
    "starRating": 4
  },
  {
    "id": 7, "name": "Notorious B.I.G", "genre": "Rap",
    "imgUrl": "http://www.couturing.com/wp/wp-content/uploads/2015/11/biggie_logo_black-01.jpg",
    "starRating": 3.5
  },
  {
    "id": 8, "name": "Sum 41", "genre": "Rock",
    "imgUrl": "http://wallpapercave.com/wp/nRMUMdb.jpg",
    "starRating": 3.75
  }
]);
    }*/

    private handleError(error: Response ) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}