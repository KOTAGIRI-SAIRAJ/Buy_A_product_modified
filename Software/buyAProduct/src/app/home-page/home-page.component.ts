import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";
/*import {Popup} from "ng2-opd-popup";*/
/*import {Popup} from 'ng2-opd-popup';*/


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {
  /*@ViewChild('Popupref') Popupref: Popup;*/
  /*public categoriesToSearchComponent = ['Apple','Lenovo','Watches','Samsung','Iphone_5','Iphone_5s','Iphone_headset','Lenovo_J20','Lenovo_Z50','Lenovo_Z52','Ipad_Tablet','Rolex-diamond-daytona-golden','Rolex-diamond-daytone-Black','Rolex-Watch','Rolex-watch','Samsung_SL1500','samsung-galaxy-on-nxt-sm-g610','Samsung_SL15'];*/
  forSelectedCategoryProdutsArray:Array<any> = [];
  ArrayContainsCLickedProductsWithoutDuplicates: Array<any> = [];
  public categoriesToSearchComponent:Array<any> = [];
  public router: Router;
  public totJsonData:any=[];
  public FinalAmount: number = 0;

  // Intializing the service and Router.
  constructor(public _productService:productService,public route: Router) {
    this.router = route;

  }

  // Reading the total Products List from the JSON file and calling a method to store the JSON data.
  ngOnInit() {
    this._productService.getProductsJsonData().subscribe(totJsonData => {
        this.totJsonData = totJsonData;
        this.populateSearchData();
      },error => {
        alert(error)
    });
  }

  // Stores the Id and Category of the product into one single array without duplicates, and Sort them
  populateSearchData = ():void => {
    var categoriesToSearchComponentTemp:Array<any> = [];
    console.log('from populateSearchData')
    let flag;
    this.totJsonData.forEach((eachRecord) => {
      categoriesToSearchComponentTemp.push(eachRecord.id);
      flag = 0;
      categoriesToSearchComponentTemp.forEach((eachProdcutIdandCategory) => {
          if(eachProdcutIdandCategory === eachRecord.category){
            flag= 1;
          }
      });
      if(flag === 0){
        categoriesToSearchComponentTemp.push(eachRecord.category);
      }
    })
    categoriesToSearchComponentTemp = categoriesToSearchComponentTemp.sort();
    this.categoriesToSearchComponent = categoriesToSearchComponentTemp;
  }


  // Get the Selected Product from the Auto-Complete Search Bar
  gettingTheSelectedTypeFromSearch = (selectedCategory):void => {
    this.forSelectedCategoryProdutsArray = [];
    for(let eachProductRecord of this.totJsonData){
      if(eachProductRecord.category === selectedCategory || eachProductRecord.id === selectedCategory){
        this.forSelectedCategoryProdutsArray.push(eachProductRecord);
      }
    }
  }

  // For the Selected Product, Getting those total Product Items into an Array which are related with this selected product, without duplicates
  getTheClickedProduct = (selectedProduct):void => {
    let flag = 0;
    if(this.ArrayContainsCLickedProductsWithoutDuplicates.length === 0){
      alert('Product added to Cart');
      this.FinalAmount = this.FinalAmount + selectedProduct.price;
      this.ArrayContainsCLickedProductsWithoutDuplicates.push(selectedProduct);
    }
    else{
      if(this._productService.getTheTotalProductsData().length > 0){
        this.ArrayContainsCLickedProductsWithoutDuplicates = this._productService.getTheTotalProductsData();
      }
      for(let eachProd of this.ArrayContainsCLickedProductsWithoutDuplicates){
        if(eachProd.id === selectedProduct.id){
          flag =1;
          alert('Product is already added to cart, Please increase the qunatity');
        }
      }
      if(flag === 0){
        alert('Product added to Cart');
        this.ArrayContainsCLickedProductsWithoutDuplicates.push(selectedProduct);
        this.FinalAmount =0;
        for(let eachProd of this.ArrayContainsCLickedProductsWithoutDuplicates){
          this.FinalAmount = this.FinalAmount + (eachProd.quantity * eachProd.price);

        }
      }
    }
    this._productService.setTheTotalProductsData(this.ArrayContainsCLickedProductsWithoutDuplicates,this.FinalAmount);
  }

  // Page Navigation to Billing Component
  goToBillingComponent(){
    this.router.navigate(['bill']);
  }
}
