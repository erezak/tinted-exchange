import { Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { HomeComponent } from '../home/home.component';
import { SellersComponent } from '../sellers/sellers.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sellers',
        component: SellersComponent
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: 'productdetail/:id',
        component: ProductdetailComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]