import { Component } from 'angular2/core';
import { Album } from './album.model';
@Component({
  selector: 'album-display',
  inputs: ['album'],
  template:`
  <h3>"{{album.title}}" by {{album.artist}} | {{album.genre}} | \${{(album.price).toFixed(2)}}</h3>
  `
})

export class AlbumComponent{
  public album: Album;
}
