import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";
import {Router} from '@angular/router';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})


export class BillComponent implements OnInit {

  public purchasedProductsData:any;
  public purchasedProductsAmount:number;
  date = new Date();
  public router: Router;
  // Getting the purchased Items into the List and Amount

  constructor(public _productService:productService,public route: Router) {
    this.router = route;
    this.purchasedProductsData = _productService.getTheTotalProductsData();
    this.purchasedProductsAmount  = _productService.getTheTotalAmount();
    if(this.purchasedProductsAmount <= 0){
      alert('No Items Purchased')
    }
  }
  ngOnInit() { }
  NavigatetoHomepage(){
    alert('Thank You For Shopping...!!!');
    this.router.navigate(['home-page']);
  }
}
