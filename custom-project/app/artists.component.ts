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
     showImages: boolean;
     imgMargin = 150;
     imgWidth = 50;
     listFilter = '';
    constructor(private artistService: ArtistService) {
    }

    ngOnInit(): void {
        this.artists = this.artistService.getArtists();
        this.showImages = false;
    }

    showImage(): void {
        this.showImages = !this.showImages;
    }
    onNotify(msg: string): void{
        this.title = 'My Artists ' + msg;
    }
}

export class Artist {
    name: string;
    id: number;
    genre: string;
    imgUrl: string;
    starRating: number;
}
