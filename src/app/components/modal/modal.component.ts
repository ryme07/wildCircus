import { User } from './../../shared/models/user';
import { Ticket } from './../../shared/models/ticket';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  user = new User();
  ticket: Ticket;

  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, public router: Router, public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public userToUpdate: User) { }




  ngOnInit() {

    if (this.userService.toUpdate === true) {
      this.user = this.userToUpdate;
    }

  }

  closeClick(): void {
    this.dialogRef.close();
  }

  sendTicket(): void {
    // this.userService.createUser({
    //   lastname: this.user.lastname,
    //   firstname: this.user.firstname,
    //   email: this.user.email,
    //   tickets: [
    //     {
    //       date: this.ticket.date,
    //       numTicket: this.ticket.numTicket
    //     }
    //   ]

    // }).subscribe((data) => this.user = data);
    // console.log('Ok');
    // this.dialogRef.close();

  }


  updateTicket(newUser: User): void {

    this.userService.updateUser(newUser.id, newUser.tickets[0].id).subscribe();

    this.dialogRef.close();
  }

}
