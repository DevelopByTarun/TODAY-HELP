
export class ItemModal {

 public id: number;
 public name: String;
 public price: number;
 public desc: String;
 public image: String;

  constructor(id: number, name: String, price: number, desc: String, image: String) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.image = image;
  }
}
