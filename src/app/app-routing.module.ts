import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { NewSaleComponent } from './Components/new-sale/new-sale.component';
import { SalesComponent } from './Components/sales/sales.component';

const routes: Routes = [
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: 'new-sale',
    component: NewSaleComponent,
  },
  {
    path: '',
    redirectTo: '/sales',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
