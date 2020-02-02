import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../shared/models/user';
import { Ticket } from '../../shared/models/ticket';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  ticketForm: FormGroup;
  user: User;
  ticket: Ticket;

  constructor(private fb: FormBuilder, private userService: UserService) {


    this.ticketForm = this.fb.group({
      lastname: [''], firstname: [''], email: [''], date: [''], numTicket: ['']
    });


  }

  ngOnInit() {
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

  }

}
