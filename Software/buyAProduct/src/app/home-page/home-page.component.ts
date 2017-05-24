import {Component, OnInit, ViewChild} from '@angular/core';
import { productService } from "../app.productService";
import {Router} from '@angular/router';
import {Popup} from 'ng2-opd-popup';
/*import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";*/


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {
  @ViewChild('popup1') popup1: Popup;
  forSelectedCategoryProdutsArray:Array<any> = [];
  ArrayContainsCLickedProductsWithoutDuplicates: Array<any> = [];
  public categoriesToSearchComponent:Array<any> = [];
  public router: Router;
  public totJsonData:any=[];
  public name:any;
  public FinalAmount: number = 0;
  /*public Myform:FormGroup;*/
  // Intializing the service and Router.
  constructor(public _productService:productService,public route: Router) {
  /*,public form:FormBuilder
   ,private popup:Popup*/
    this.router = route;
    /*this.Myform=this.form.group({
      Usname: ['',Validators.required]
    });*/
  }

  // Reading the total Products List from the JSON file and calling a method to store the JSON data.
  // Calling The Popup Model For the First Time
  ngOnInit() {
    this._productService.getProductsJsonData().subscribe(totJsonData => {
        this.totJsonData = totJsonData;
        this.gettingTheJsonDataAddingToSearchCompleter();
      },error => {
        alert(error)
    });
    this.popupmodule();
  }

  // For showing the Popup modal
  popupmodule = ():void =>{
    this.popup1.options = {
      color: "#66AACC",
      confirmBtnClass: "btn btn-default",
      cancleBtnClass: "btn btn-default",
      header: "Register User",
      widthProsentage:80,
      cancleBtnContent: "Cancle",
      animation: "bounceInDown",
      };
    this.popup1.show(this.popup1.options);
  }

  // getting the user Name from the Popup modal
  getUser = ():void =>{
    if(this.name === undefined){
        alert('User Name Field cannot be empty');
    }else{
      localStorage.setItem("UserName", this.name);
      this.popup1.hide();
    }
  }


  // Reloads the page  if the Name is not given
  Reloading = ():void =>{
    location.reload();
  }

  // Stores the Id and Category of the product into one single array without duplicates, and Sort them
  gettingTheJsonDataAddingToSearchCompleter = ():void => {
    let categoriesToSearchComponentTemp:Array<any> = [];
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
    });
    categoriesToSearchComponentTemp = categoriesToSearchComponentTemp.sort();
    this.categoriesToSearchComponent = categoriesToSearchComponentTemp;
  };


  // Get the Selected Product from the Auto-Complete Search Bar
  gettingTheSelectedTypeFromSearch = (selectedCategory):void => {
    this.forSelectedCategoryProdutsArray = [];
    for(let eachProductRecord of this.totJsonData){
      if(eachProductRecord.category === selectedCategory || eachProductRecord.id === selectedCategory){
        this.forSelectedCategoryProdutsArray.push(eachProductRecord);
      }
    }
  };

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
  };

  // Page Navigation to Billing Component
  goToBillingComponent(){
    this.router.navigate(['bill']);
  }


}
