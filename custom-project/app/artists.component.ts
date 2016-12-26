import { Component, OnInit } from '@angular/core';
import {ArtistService} from './artists.service';


@Component({
    moduleId: module.id,
    selector: 'artists',
    templateUrl: 'templates/artists.component.html',
    styleUrls: ['css/artists.component.css']
})
export class ArtistsComponent implements OnInit {
    title = 'My Artists';
    artists: Artist[];
    artist: Artist;
    showImages: boolean;
    imgMargin = 150;
    imgWidth = 50;
    listFilter = '';
    errorMsg: string;
    constructor(private artistService: ArtistService) {
    }

    ngOnInit(): void {
        this.artistService.getArtists()
        .subscribe(artists => this.artists = artists,
        error => this.errorMsg = <any> error );
        this.showImages = false;
    }

    showImage(): void {
        this.showImages = !this.showImages;
    }
    onNotify(msg: string): void {
        this.title = 'My Artists ' + msg;
    }
}

export class Artist {
    name: string;
    id: number;
    genre: string;
    imgUrl: string;
    starRating: number;
    albums: string[]
}
