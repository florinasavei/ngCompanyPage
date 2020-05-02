import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: 'acasa', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/acasa', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
