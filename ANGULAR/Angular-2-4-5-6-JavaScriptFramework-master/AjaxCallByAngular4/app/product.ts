
export class Product {

  public id:number;
  public name:string;
  public price:number;
  public url:string;

  constructor(id:number, name:string, price:number, url:string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.url = url;
  }

}
