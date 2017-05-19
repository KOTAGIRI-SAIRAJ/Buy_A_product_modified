import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html',
  styleUrls: ['./images-component.component.css'],
  inputs : ['forSelectedCategoryProdutsArray']
})
export class ImagesComponentComponent implements OnInit {
  @Output() getTheDatatableProductsArray: EventEmitter<any>  = new EventEmitter();
  constructor() {  }
  ngOnInit() {  }
  productsArrayToDatatable: Array<any> = [];
  productDetailsToDatatable(clickedproduct){
    let flag = 0;
    if(this.productsArrayToDatatable.length === 0){
      alert('Your Product is Added to cart');
      this.productsArrayToDatatable.push(clickedproduct);
    }else{
    for(let eachProd of this.productsArrayToDatatable){
      if(eachProd.id === clickedproduct.id){
        flag = 1;
      }
    }
    if(flag === 0){
      alert('Your Product is Added to cart');
      this.productsArrayToDatatable.push(clickedproduct);
    }else{
      alert('The product is already added to Cart');
    }}
    this.getTheDatatableProductsArray.emit(this.productsArrayToDatatable);
  }
}
