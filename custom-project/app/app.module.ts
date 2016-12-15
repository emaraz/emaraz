import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {ArtistsComponent} from './artists.component';
import {ArtistService} from './artists.service';
import {FormsModule} from '@angular/forms';
import {StarsComponent} from './stars.component';
import {ArtistDetailComponent} from './artist-detail.component';
import {WelcomeComponent} from './welcome.component';
import {ArtistFilter} from './filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
   RouterModule.forRoot([
     {
       path: 'welcome', component: WelcomeComponent
      },
     {
     path: '', redirectTo: 'welcome', pathMatch: 'full'
     },
     {
       path: 'artists', component: ArtistsComponent
    },
     {
       path: 'artist/:id', component: ArtistDetailComponent
    }
  ]) ],
  declarations: [ AppComponent, ArtistsComponent, StarsComponent, ArtistDetailComponent, WelcomeComponent, ArtistFilter ],
  providers: [ArtistService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
