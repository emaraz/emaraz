import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ArtistsComponent} from './artists.component';
import {ArtistService} from './artists.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ArtistsComponent ],
  providers: [ArtistService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
