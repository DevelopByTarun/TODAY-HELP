
export class Item {

 public id:number;
 public name:string;
 public price:number;
 public desc:string;

  constructor(id:number, name:string, price:number, desc:string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
  }
}
