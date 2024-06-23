import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailComponent } from './pages/products-detail/ProductsDetailComponent';
import { ContactComponent } from './pages/contact/contact.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**',redirectTo:'', pathMatch:'full'}
];
