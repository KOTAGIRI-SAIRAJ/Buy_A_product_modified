import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

export const router:  Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component : HomePageComponent},
  /*{path: 'bill/:tot', component : BillComponentComponent}*/
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
