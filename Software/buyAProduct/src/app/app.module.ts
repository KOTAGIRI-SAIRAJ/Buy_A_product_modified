import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { SelectModule } from 'ng2-select';
import { DataTableModule } from 'angular2-datatable';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ImagesComponentComponent } from './images-component/images-component.component';
import { DataTableComponentComponent } from './data-table-component/data-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    SearchComponentComponent,
    ImagesComponentComponent,
    DataTableComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    Ng2AutoCompleteModule,
    SelectModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
