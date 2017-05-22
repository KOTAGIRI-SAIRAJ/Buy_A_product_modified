import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})



export class BillComponent implements OnInit {

  public purchasedProductsData:any;
  public purchasedProductsAmount:number;
  date = new Date();

  // Getting the purchased Items into the List and Amount

  constructor(public _productService:productService) {
    this.purchasedProductsData = _productService.getTheTotalProductsData();
    this.purchasedProductsAmount  = _productService.getTheTotalAmount();
  }
  ngOnInit() {
  }

}
