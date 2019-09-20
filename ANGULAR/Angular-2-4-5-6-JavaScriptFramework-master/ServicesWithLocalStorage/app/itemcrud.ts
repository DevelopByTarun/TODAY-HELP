
export interface Itemcrud {

  addItem(id:number, name:string, price:number, desc:string);

  saveItemToLocalStorage();

  loadItemsFromLocalStorage();

  deleteItemFromLocalStorage();
}
