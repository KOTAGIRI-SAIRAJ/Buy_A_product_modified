import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class productService {
  ProductsToBilling: Array<any> = [];
  amount:number=0;
  constructor(private _http: Http) {  }
  getProductsJsonData() {
    return this._http.get('assets/ProductsData.json')
      .map(res => res.json());
  }
  setTheTotalProductsData(gettingProductsData,amount){
    this.ProductsToBilling  = gettingProductsData;
    this.amount = amount;
  }
  getTheTotalProductsData():any {
    return this.ProductsToBilling;
  }
  getTheTotalAmount():number{
    return this.amount;
  }
}
