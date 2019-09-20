
export class Book {

  public id:string;

  public name:string;

  public category:string;

  public writer:string;

  public year:string;

  public url:string

  constructor(id:string, name:string, category:string, writer:string, year:string, url:string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.writer = writer;
    this.year = year;
    this.url = url;
  }
}
