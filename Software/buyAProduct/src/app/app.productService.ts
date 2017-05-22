import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class  productService {
  ProductsToBilling: Array<any> = [];
  amount:number=0;
  constructor(private _http: Http) {  }


  // Get the all the Product Details from the JSON file

  getProductsJsonData() {
    return this._http.get('assets/ProductsData.json')
      .map(res => res.json());
  }

  // Getting and Setting the Product Details of the User

  setTheTotalProductsData(gettingProductsData,amount){
    this.ProductsToBilling  = gettingProductsData;
    this.amount = amount;
  }

  // Returns the Product Details for the purchased Items

  getTheTotalProductsData():any {
    return this.ProductsToBilling;
  }

  // Returns the Total Amount of the of the Purchased Items

  getTheTotalAmount():number{
    return this.amount;
  }
}
