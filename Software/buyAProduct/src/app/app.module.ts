import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import {ConfirmModule} from 'angular2-bootstrap-confirm';
import { SelectModule } from 'ng2-select';
import {DataTableModule} from "angular2-datatable";
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ImagesComponentComponent } from './images-component/images-component.component';
import { DataTableComponentComponent } from './data-table-component/data-table-component.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BillComponent } from './bill/bill.component';
import {productService} from "./app.productService";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    SearchComponentComponent,
    ImagesComponentComponent,
    DataTableComponentComponent,
    DatatableComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    ConfirmModule,
    routes,
    Ng2AutoCompleteModule,
    SelectModule
  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
