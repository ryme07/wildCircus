import { ShowService } from './../../shared/services/show.service';
import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../shared/models/ticket';
import { TicketService } from '../../shared/services/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Show } from '../../shared/models/show';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // tickets: Ticket[] = [];
  shows: Show[] = [];
  buttons = [1, 2, 3];

  constructor(private showservice: ShowService, private router: Router, public dialog: MatDialog) {
    this.showservice.getAllShows()
      .subscribe((data) => {
        this.shows = data;
        console.log(this.shows);
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

// this.ticketservice.getAllTickets()
// .subscribe((data) => {
//   this.tickets = data;
//   console.log(this.tickets);
// })
