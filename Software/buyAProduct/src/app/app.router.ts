import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {BillComponent} from "./bill/bill.component";

export const router:  Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component : HomePageComponent},
  {path: 'bill', component : BillComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
