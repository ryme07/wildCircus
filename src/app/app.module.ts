import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowsComponent } from './pages/shows/shows.component';
import {MatSelectModule} from '@angular/material/select';
import { Ticket } from './shared/models/ticket';
import { BookingformComponent } from './components/bookingform/bookingform.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { ShowModalComponent } from './components/show-modal/show-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    CardsComponent,
    ShowsComponent,
    ContactComponent,
    ModalComponent,
    FormModalComponent,
    BookingformComponent,
    BookingComponent,
    AdminComponent,
    ShowModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    RouterModule.forRoot(
      [],
      {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, FormModalComponent, ShowModalComponent]
})
export class AppModule { }
