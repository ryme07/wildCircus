import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { Ticket } from 'src/app/shared/models/ticket';
import { UserService } from 'src/app/shared/services/user.service';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {

  // ticketForm: FormGroup;
  user: User;
  ticket: Ticket;

  constructor(private fb: FormBuilder, private userService: UserService, public dialog: MatDialog) {


    // this.ticketForm = this.fb.group({
    //   name: [''], email: [''], date: [''], numTicket: ['']
    // });


  }

  ngOnInit() {

    // a voir...
    this.user = new User();
    this.ticket = new Ticket();
  }

  sendTicket() {

    this.userService.createUser({
      lastname: this.user.lastname,
      firstname: this.user.firstname,
      email: this.user.email,
      tickets: [
        {
          date: this.ticket.date,
          numTicket: this.ticket.numTicket
        }
      ]

    }).subscribe((data) => this.user = data);
    console.log('Ok');

  }

  confirmTicket() {

    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
