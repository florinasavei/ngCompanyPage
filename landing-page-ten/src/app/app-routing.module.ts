import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  { path: 'acasa', component: HomeComponent },
  { path: 'produse', component: ProductsComponent },
  { path: '',   redirectTo: '/acasa', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
