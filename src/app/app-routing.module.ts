import { BookingComponent } from './pages/booking/booking.component';

import { ContactComponent } from './pages/contact/contact.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'contact', component: ContactComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
