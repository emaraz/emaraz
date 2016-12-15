import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
import {Artist} from './artists.component';

@Pipe({
    name: 'artistFilter'
})

export class ArtistFilter implements PipeTransform {
    transform(artists: Artist[], filterBy: string): Artist[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? artists.filter((artist: Artist) =>
         artist.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : artists;
    }

}