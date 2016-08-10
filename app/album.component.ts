import { Component } from 'angular2/core';
import { Album } from './album.model';
@Component({
  selector: 'album-display',
  inputs: ['album'],
  template:`
  <div>
    <input *ngIf="album.checkout" type="checkbox" checked (click)="toggleCheckout(false)"/>
    <input *ngIf="!album.checkout" type="checkbox" (click)="toggleCheckout(true)"/>
    <label><h3>"{{album.title}}" by {{album.artist}} | {{album.genre}} | \${{(album.price).toFixed(2)}}</h3></label>

  </div>
  `
})

export class AlbumComponent{
  public album: Album;

  toggleCheckout(setState: boolean){
    this.album.checkout = setState;
  }

}
