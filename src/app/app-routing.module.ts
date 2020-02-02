import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'shop', component: BookingFormComponent},
  {path: 'show', component: ShowsComponent},
  {path: 'contact', component: ContactComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
