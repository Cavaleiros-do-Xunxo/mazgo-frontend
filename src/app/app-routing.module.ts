import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './views/product-list/product-list.component';
import {HistoryComponent} from './views/history/history.component';
import {ProductComponent} from "./views/product/product.component";

const routes: Routes = [
    {
        component: HistoryComponent,
        path: 'history',
        pathMatch: 'full'
    },
    {
        path: 'products/:id',
        component: ProductComponent
    },
    {
        component: ProductListComponent,
        path: '',
        pathMatch: 'full'
    },
    {
        component: ProductListComponent,
        path: '**'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
