import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html',
  styleUrls: ['./images-component.component.css'],
  inputs : ['forSelectedCategoryProdutsArray']
})
export class ImagesComponentComponent implements OnInit {
  @Output() getTheClickedProduct: EventEmitter<any>  = new EventEmitter();
  constructor() {  }
  ngOnInit() {  }

  // Returns the Clicked products to the DataTable using Event Emitter
  productDetailsToDatatable = (clickedproduct):void => {
   this.getTheClickedProduct.emit(clickedproduct);
  }
}
