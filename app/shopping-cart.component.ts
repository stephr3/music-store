import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'shopping-cart',
  inputs: ['album'],
  template: `
    <h3>"{{album.title}}" | \${{(album.price).toFixed(2)}}</h3>
  `
})
export class ShoppingCartComponent{

}
