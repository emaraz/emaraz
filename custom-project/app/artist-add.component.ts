import {Component, OnInit, Input} from '@angular/core';
import {Artist} from './artists.component';
import {ArtistService} from './artists.service';

@Component({
    moduleId: module.id,
    selector: 'artist-add',
    templateUrl: 'templates/artist-add.component.html',
    styleUrls: ['css/artist-add.component.css']

})
export class ArtistAddComponent implements OnInit{
    @Input() artistList: Artist[];
    artist: Artist;
    name: string;
    genre: string;
    rating: string;
    imgUrl: string;
    album: string;
    artistName: string;
    albumAdd: boolean;
    id: number;
    constructor(private service: ArtistService){
    }
    
    ngOnInit(){
            this.albumAdd = true;
            this.name = 'Name';
            this.genre = 'Genre';
            this.imgUrl = 'Image URL';
            this.rating = 'Rating';
            this.artistName = 'Artist Name';
    }
    
    onAddArtistClick(){
     //   if(!this.isArtistExist())
        this.artist = new Artist();
        this.artist.name = this.name;
        this.artist.genre = this.genre;
        this.artist.starRating = Number.parseInt(this.rating);
        this.artist.imgUrl = this.imgUrl;
        this.artist.albums=[];
        this.albumAdd = true;
        if(!this.isArtistExist()){
            let _id = this.artistList.length+1;
            this.artist.id = _id;
            this.service.addArtist(this.artist).subscribe();
            console.log('artist with name: '+ this.artist.name+' added with id'+_id);
            _id++;
        }
        
    }

    onAddAlbumClick() {
        console.log(this.album + 'album added :)');
        this.artist.albums.push(this.album);
      //  this.albumAdd = !this.albumAdd;
        console.log('albumAdd = ' + this.albumAdd);
    }

    isArtistExist(): boolean{
        let artistExist: boolean = false;
        for(let i=0; i<this.artistList.length;i++){
            if(this.artistList[i].name === this.artist.name){
                artistExist = true;
                break;
            }
        }
    return artistExist;
    }
}