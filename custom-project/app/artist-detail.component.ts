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
    artist: Artist;
    errorMsg: string;
    id: number;
    imgWidth: number = 100;
    constructor(private activatedRoute: ActivatedRoute, private _router: Router, private service: ArtistService) {

    }
    ngOnInit() {
        let _id = this.activatedRoute.snapshot.params['id'];
        this.id = _id;
        this.service.getArtists()
        .subscribe(artists => this.artist = <Artist>artists[this.id-1],
        error => this.errorMsg = <any> error );
    }

    onBackClick() {
        this._router.navigate(['/artists']);
    }
}
