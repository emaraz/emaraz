import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({

    moduleId: module.id,
    templateUrl: 'templates/artist-detail.component.html',
    styleUrls: ['']

})

export class ArtistDetailComponent implements OnInit {
    title: string = 'Artist Details!';
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'];
        this.title = 'Artist ' + `${id}` + ' details!';
    }
    onBackClick(): void{
        this.router.navigate(['/artists']);
    }
}
