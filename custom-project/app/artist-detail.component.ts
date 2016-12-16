import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistService} from './artists.service';
import {Artist} from './artists.component';

@Component({

    moduleId: module.id,
    templateUrl: 'templates/artist-detail.component.html',
    styleUrls: ['']

})

export class ArtistDetailComponent implements OnInit {
    title: string = 'Artist Details!';
    artist: Artist;
    id: number;
    imgWidth: number = 100;
    constructor(private activatedRoute: ActivatedRoute, private _router: Router, private service: ArtistService) {

    }
    ngOnInit() {
        let _id = this.activatedRoute.snapshot.params['id'];
        this.id = _id;
        this.artist = this.service.getArtist(this.id - 1);
        this.title = this.artist.name + ' details!';
    }

    onBackClick() {
        this._router.navigate(['/artists']);
    }
}
