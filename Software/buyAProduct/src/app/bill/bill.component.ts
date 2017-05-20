import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  public totdata:any;
  public totamount:number;
  date = new Date();
  constructor(public _productService:productService) {
    this.totdata = _productService.getTheTotalProductsData();
    this.totamount  = _productService.getTheTotalAmount();
  }
  ngOnInit() {
  }

}
