import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { TotalPriceComponent} from './total-price.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CheckoutPipe } from './checkout.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent, ShoppingCartComponent, TotalPriceComponent],
  pipes: [GenrePipe, ArtistPipe, CheckoutPipe],
  template:
  `
  <p>Filter Albums by Genre</p>
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Genres</option>
    <option value="Pop">Pop</option>
    <option value="Rock">Rock</option>
    <option value="Folk">Folk</option>
  </select>
  <p>Search Albums by Artists</p>
  <input value="all" #artistName>
  <button (click)="showAlbum(artistName)">Search</button>
  <button (click)="showAllAlbums()">View All Albums</button>
  <div *ngIf="(albumList | artist: filterArtist).length === 0">
  Sorry, your search returned no matches.
  </div>
  <album-display *ngFor = "#currentAlbum of albumList | genre:filterGenre | artist:filterArtist" [album]="currentAlbum"></album-display>
  <hr>
  <h1>Shopping Cart</h1>
  <div *ngIf="(albumList | checkout: filterCheckout).length === 0">
  There are no items in your cart.
  </div>
  <shopping-cart *ngFor = "#checkoutAlbum of albumList | checkout:filterCheckout" [album]="checkoutAlbum" ></shopping-cart>
  <button (click)="calculateTotal(albumList)">My Total</button>
  <total-price [total]="totalPrice" ></total-price>
    `
})

export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: string = "all";
  public filterArtist: string = "all";
  public filterCheckout: string = "checkout";
  public totalPrice: number = 0;


  onChange(filterOption){
    this.filterGenre = filterOption;
  }
  showAlbum(filterOption: HTMLInputElement){
    this.filterArtist = filterOption.value;
    filterOption.value = "all";
  }
  showAllAlbums(){
    this.filterArtist = "all";
  }
  calculateTotal(albumList){
    this.totalPrice =0;
    for (var i=0; i<albumList.length; i++)
    {
      console.log(albumList[i].checkout);
      if(albumList[i].checkout){
        this.totalPrice += albumList[i].price;

      }
    }
  }

  //calculate total function here - totalPrice

}
