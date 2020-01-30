import { ModalComponent } from './../modal/modal.component';
import { ShopComponent } from './../../pages/shop/shop.component';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket';
import { TicketService } from 'src/app/shared/services/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  tickets: Ticket[] = [];
  buttons = [1, 2, 3];

  constructor(private ticketservice: TicketService, private router: Router, public dialog: MatDialog) {
    this.ticketservice.getAllTickets()
    .subscribe((data) => {
      this.tickets = data;
      console.log(this.tickets);
    });
   }
  ngOnInit() {
  }

  openModal(): void {

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    // this.router.navigateByUrl('/shop');
  }
}
