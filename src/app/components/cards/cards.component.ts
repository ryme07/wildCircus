import { ShowService } from './../../shared/services/show.service';
import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../shared/models/ticket';
import { TicketService } from '../../shared/services/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Show } from '../../shared/models/show';
import { ShowModalComponent } from '../show-modal/show-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // tickets: Ticket[] = [];
  shows: Show[] = [];

  constructor(private showservice: ShowService, private router: Router, public dialog: MatDialog) {
    this.showservice.getAllShows()
      .subscribe((data) => {
        this.shows = data;
        console.log(this.shows);
      });
  }
  ngOnInit() {
    console.log(this.shows[0].image);
  }



  editShow(show): void {

    const dialogRef = this.dialog.open(ShowModalComponent, {
      width: '550px',
      data: show,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this.showservice.updateShow(show).subscribe();
  }
}


