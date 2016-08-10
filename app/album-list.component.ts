import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent],
  pipes: [GenrePipe, ArtistPipe],
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
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: string = "all";
  public filterArtist: string = "all";

  onChange(filterOption){
    this.filterGenre = filterOption;
  }
  showAlbum(filterOption: HTMLInputElement){
    this.filterArtist = filterOption.value;
    filterOption.value = "all";

  }
}
