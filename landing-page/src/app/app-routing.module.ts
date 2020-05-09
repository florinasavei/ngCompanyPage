import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { UnsefulComponent } from './pages/unseful/unseful.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: 'acasa', component: HomeComponent },
  { path: 'produse', component: ProductsComponent },
  { path: 'servicii', component: SolutionsComponent },
  { path: 'utile', component: UnsefulComponent },
  { path: 'despre', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/acasa', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
