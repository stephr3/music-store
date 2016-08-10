import { Component } from 'angular2/core';
import { Album } from './album.model';
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Music Store</h1>
      <h3 *ngFor="#album of albums">"{{album.title}}" by {{album.artist}} | {{album.genre}} | \${{(album.price).toFixed(2)}}</h3>
    </div>
  `
})
export class AppComponent {
 public albums: Album[];
 constructor(){
   this.albums = [
     new Album("Abbey Road", "The Beatles", 10.00, "Pop"),
     new Album("Thriller", "Michael Jackson", 11.00, "Pop"),
     new Album("Whitney", "Whitney Houston", 9.50, "Pop"),
     new Album("The Wall", "Pink Floyd", 10.00, "Rock"),
     new Album("Nevermind", "Nirvana", 10.50, "Rock"),
     new Album("OK Computer", "Radiohead", 11.50, "Rock"),
     new Album("The Freewheelin' Bob Dylan", "Bob Dylan", 8.50, "Folk"),
     new Album("Blue", "Joni Mitchell", 9.50, "Folk"),
     new Album("Songs of Leonard Cohen", "Leonard Cohen", 9.00, "Folk")
   ];
 }
}
