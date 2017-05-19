import { Component, OnInit } from '@angular/core';
import { productService } from "../app.productService";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [productService]
})
export class HomePageComponent implements OnInit {
  categoriesToSearchComponent = ['Apple_Products','Lenovo_Products'];
  forSelectedCategoryProdutsArray:Array<any> = [];
  public totJsonData:any;
  constructor(public _productService:productService) {
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
      if(eachProductRecord.category === selectedCategory){
        this.forSelectedCategoryProdutsArray.push(eachProductRecord);
      }
    }
    console.log(this.forSelectedCategoryProdutsArray);
  }
  getTheDatatableProductsArray(sendDatatableProductsArray){
    console.log('from home-page component.ts method name is getTheDatatableProductsArray')
    console.log(sendDatatableProductsArray);
  }
}
