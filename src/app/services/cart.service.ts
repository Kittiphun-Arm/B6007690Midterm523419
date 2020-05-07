import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartProduct: productsModel = [];
  total: number = 0
  sumPrice: number = 0;
 
  constructor() { }
  add(id:string){
    console.log('Add product id: '+id+'tocart')
    this.total +=1
  }

  getCounter(){
    return this.total;
  }
  getsumPrice(){
    return this.sumPrice;
  }
  getCart(){
    return this.cartProduct;
  }
}
