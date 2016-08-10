import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "checkout",
  pure: false
})
export class CheckoutPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredCheckoutState = args[0];
    if(desiredCheckoutState === "checkout") {
      return input.filter(function(album){
        return album.checkout;
      });
    } else {
      return input;
    }
  }
}
