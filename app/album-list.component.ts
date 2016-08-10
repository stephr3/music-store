import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CheckoutPipe } from './checkout.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent, ShoppingCartComponent],
  pipes: [GenrePipe, ArtistPipe, CheckoutPipe],
  template:
  `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Genres</option>
    <option value="Pop">Pop</option>
    <option value="Rock">Rock</option>
    <option value="Folk">Folk</option>
  </select>
  <p>Search Albums by Artists</p>
  <input value="all" #artistName>
  <button (click)="showAlbum(artistName)">Search</button>
  <album-display *ngFor = "#currentAlbum of albumList | genre:filterGenre | artist:filterArtist" [album]="currentAlbum"></album-display>
  <hr>
  <h1>Shopping Cart</h1>
  <shopping-cart *ngFor = "#checkoutAlbum of albumList | checkout:filterCheckout" [album]="checkoutAlbum"></shopping-cart>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: string = "all";
  public filterArtist: string = "all";
  public filterCheckout: string = "checkout";

  onChange(filterOption){
    this.filterGenre = filterOption;
  }
  showAlbum(filterOption: HTMLInputElement){
    this.filterArtist = filterOption.value;
    filterOption.value = "all";

  }
}
