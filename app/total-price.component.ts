import {Component} from 'angular2/core';
import {AlbumComponent} from './album.component';
import {Album} from './album.model';

@Component({
  selector: 'total-price',
  inputs: ['total'],
  template:`
  <h3>Your Total is: \${{total.toFixed(2)}}</h3>
  `
})
export class TotalPriceComponent {
  public total: number;

}
