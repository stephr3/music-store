import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent],
  pipes: [GenrePipe],
  template:
  `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Genres</option>
    <option value="Pop">Pop</option>
    <option value="Rock">Rock</option>
    <option value="Folk">Folk</option>
  </select>
  <album-display *ngFor = "#currentAlbum of albumList | genre:filterGenre" [album]="currentAlbum"></album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: string = "all";

  onChange(filterOption){
    this.filterGenre = filterOption;
  }
}
