import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {
  categoriesToSearchComponent = ['Apple_Products','Lenovo_Products','Iphone_5','Iphone_5s','Iphone_headset','Lenovo','Lenovo_Z50','Lenovo_Z52','Mac_Tablet'];
  categoriesToSearchComponentt: Array<any>=[];
  forSelectedCategoryProdutsArray:Array<any> = [];
  ArrayContainsCLickedProductsWithoutDuplicates: Array<any> = [];
  public router: Router;
  public totJsonData:any;
  public FinalAmount: number = 0;
  constructor(public _productService:productService,public route: Router) {
    this.router = route;
    this._productService.getProductsJsonData()
      .subscribe(totJsonData => this.totJsonData = totJsonData,
        error => alert(error),
      );
  }
  ngOnInit() {

  }
  gettingTheSelectedTypeFromSearch(selectedCategory){
    this.forSelectedCategoryProdutsArray = [];
    for(let eachProductRecord of this.totJsonData){
      if(eachProductRecord.category === selectedCategory || eachProductRecord.id === selectedCategory){
        this.forSelectedCategoryProdutsArray.push(eachProductRecord);
      }
    }

  }
  getTheClickedProduct(selectedProduct){
    let flag = 0;
    if(this.ArrayContainsCLickedProductsWithoutDuplicates.length === 0){
      alert('Product added to Cart');
      this.FinalAmount = this.FinalAmount + selectedProduct.price;
      this.ArrayContainsCLickedProductsWithoutDuplicates.push(selectedProduct);
    }
    else{
      for(let eachProd of this.ArrayContainsCLickedProductsWithoutDuplicates){
        if(eachProd.id === selectedProduct.id){
          flag =1;
          alert('Product is already added to cart, Please increase the qunatity');
        }
      }
      if(flag === 0){
        alert('Product added to Cart');
        this.ArrayContainsCLickedProductsWithoutDuplicates.push(selectedProduct);
        this.FinalAmount = this.FinalAmount + selectedProduct.price;
      }
    }
    this._productService.setTheTotalProductsData(this.ArrayContainsCLickedProductsWithoutDuplicates,this.FinalAmount);
  }
  goToBillingComponent(){
    this.router.navigate(['bill']);
  }
}
