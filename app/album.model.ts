export class Album{
  public checkout: boolean = false;
  constructor(public title: string, public artist: string, public price: number, public genre: string){
  }
}
