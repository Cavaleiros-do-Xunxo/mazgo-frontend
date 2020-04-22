import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {
    component: ProductsComponent,
    path: '',
    pathMatch: 'full'
  },
  {
    component: ProductsComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
