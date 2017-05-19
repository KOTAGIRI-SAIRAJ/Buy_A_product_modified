import {Component, OnInit, EventEmitter, Input , Output} from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  @Input() categoriesToSearchComponent:any;
  @Output() gettingTheSelectedTypeFromSearch: EventEmitter<any>  = new EventEmitter();
  private value: any = {};
  private _disabledV = '0';
  private disabled = false;

  constructor() { }

  ngOnInit() {
  }
  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
  public selected(value: any): void {
    /*console.log(value);*/
    this.gettingTheSelectedTypeFromSearch.emit(value.id);
  }
  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
}
