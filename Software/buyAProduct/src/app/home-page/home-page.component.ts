import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {
  categoriesToSearchComponent = ['Apple','Lenovo','Watches','Samsung','Iphone_5','Iphone_5s','Iphone_headset','Lenovo_J20','Lenovo_Z50','Lenovo_Z52','Mac_Tablet','Rolex-diamond-daytona-golden','Rolex-diamond-daytone-Black','Rolex-Watch','Rolex-watch','Samsung_SL1500','samsung-galaxy-on-nxt-sm-g610','Samsung_SL15'];
  /*categoriesToSearchComponentt: Array<any>=[];*/
  forSelectedCategoryProdutsArray:Array<any> = [];
  ArrayContainsCLickedProductsWithoutDuplicates: Array<any> = [];
  public router: Router;
  public totJsonData:any;
  public FinalAmount: number = 0;

  // Iniializing the service and Router, and Reading the total Products List from the JSON file.

  constructor(public _productService:productService,public route: Router) {
    this.router = route;
    this._productService.getProductsJsonData()
      .subscribe(totJsonData => this.totJsonData = totJsonData,
        error => alert(error),
      );
    this.categoriesToSearchComponent = this.categoriesToSearchComponent.sort();
  }
  ngOnInit() {  }

  // Get the Selected Product from the Auto-Complete Search Bar

  gettingTheSelectedTypeFromSearch(selectedCategory){
    this.forSelectedCategoryProdutsArray = [];
    for(let eachProductRecord of this.totJsonData){
      if(eachProductRecord.category === selectedCategory || eachProductRecord.id === selectedCategory){
        this.forSelectedCategoryProdutsArray.push(eachProductRecord);
      }
    }
  }

  // For the Selected Product, Getting those total Items into an Array without duplicates

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

  // Page Navigation to Billing Component

  goToBillingComponent(){
    this.router.navigate(['bill']);
  }
}
