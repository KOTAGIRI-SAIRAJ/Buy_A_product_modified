import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { routes } from './app.router';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { ConfirmModule } from 'angular2-bootstrap-confirm';
import { SelectModule } from 'ng2-select';
import { DataTableModule } from "angular2-datatable";
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ImagesComponentComponent } from './images-component/images-component.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BillComponent } from './bill/bill.component';
import { productService } from "./app.productService";
/*import { PopupModule } from 'ng2-opd-popup';*/
import{ TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';



export function customLoader(http: Http) {
  return new TranslateHttpLoader(http, '/../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    SearchComponentComponent,
    ImagesComponentComponent,
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
    SelectModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: customLoader,
          deps: [Http]
        }
      }),

  ],
  providers: [productService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
