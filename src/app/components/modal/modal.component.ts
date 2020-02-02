import { Ticket } from './../../shared/models/ticket';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TicketService } from '../../shared/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // createTicket: Ticket;
  ticketForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  constructor(public router: Router, private fb: FormBuilder, public ticketservice: TicketService, public dialogRef: MatDialogRef<ModalComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public ticketUpdate: Ticket) {

    // on initialise le formulaire dans le constructeur
    this.ticketForm = this.fb.group({
      title: [''], date: [''], numTicket: ['']
    });


  }

  ngOnInit() {

      // this.ticketForm.controls.title.setValue(this.ticketToUpdate.title);
      // this.ticketForm.controls.date.setValue(this.ticketToUpdate.date);
      // this.ticketForm.controls.numTicket.setValue(this.ticketToUpdate.numTicket);


  }

  closeClick(): void {
    this.dialogRef.close();
  }

  sendTicket(): void {
  //   const createTicketShow = this.ticketForm.value;
  //   this.ticketservice.createTicket(createTicketShow).subscribe((data) => {
  //     console.log(data);
  //   });
  //   this.dialogRef.close();
  //   // this.router.navigateByUrl('/shop');
  }


   // updateTicket(): void {
  //   const ticketToUpdate: Ticket = this.ticketForm.value;
  //   ticketToUpdate.id = this.ticketToUpdate.id;

  //   this.ticketservice.updateTicket(ticketToUpdate).subscribe((eventPosted) => {
  //     console.log(eventPosted);
  //   });
  //   this.dialogRef.close();
  // }

}
