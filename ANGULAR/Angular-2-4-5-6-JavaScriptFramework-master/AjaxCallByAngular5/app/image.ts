
export class Image {

  public type:string;

  public id:string;

  public url:string;

  public images:any;

  constructor(type:string, id:string, url:string, images:any) {
    this.type = type;
    this.id = id;
    this.url = url;
    this.images = images;
  }
}
