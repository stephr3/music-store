import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent],
  template:
  `<album-display *ngFor = "#currentAlbum of albumList" [album]="currentAlbum"></album-display>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
}
