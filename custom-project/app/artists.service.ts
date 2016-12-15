import {Artist} from './artists.component';
import {ARTISTS} from './mock-artists';
import {Injectable} from '@angular/core';

@Injectable()

export class ArtistService{
    getArtists(): Artist[]{

        return ARTISTS;
    }

    getArtist(id: number): Artist {

        return ARTISTS[id];
    }
}