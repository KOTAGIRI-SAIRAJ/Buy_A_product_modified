import {Component, Input, OnInit} from '@angular/core';
import { productService } from "../app.productService";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {
  @Input() ArrayContainsCLickedProductsWithoutDuplicates: any;
  @Input() FinalAmount: number;
  ngOnInit(){  }
  constructor(public _productService:productService) {  }
  forFindingTotalAmount(){
    this.FinalAmount = 0;
    for(let eachProd of this.ArrayContainsCLickedProductsWithoutDuplicates){
      this.FinalAmount  = this.FinalAmount + (eachProd.price * parseInt(eachProd.quantity));
    }
    this._productService.setTheTotalProductsData(this.ArrayContainsCLickedProductsWithoutDuplicates,this.FinalAmount);
  }
}
