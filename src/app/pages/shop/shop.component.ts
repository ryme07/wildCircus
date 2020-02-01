import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Ticket } from 'src/app/shared/models/ticket';
import { TicketService } from '../../shared/services/ticket.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

 tickets: Ticket[] = [];

  constructor(private ticketservice: TicketService) {
    this.ticketservice.getAllTickets()
    .subscribe((data) => {
      this.tickets = data;
    });
  }

  ngOnInit() {
  }

  delete(id: number) {
    this.ticketservice.deleteTicket(id)
    .subscribe();
    console.log('delete');
    window.location.reload();


  }


}


/*
delete(id: number) {
    this.ticketservice.deleteTicket(id)
    .subscribe((data) => (this.tickets.splice(id, 1)));
    console.log('delete');


  }
  */
