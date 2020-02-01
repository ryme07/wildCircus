import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ticket } from '../../shared/models/ticket';
import { TicketService } from '../../shared/services/ticket.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  ticketForm: FormGroup;
  @Input() ticketmod: Ticket[] = [];

  constructor(public ticketservice: TicketService, private fb: FormBuilder, public dialogRef: MatDialogRef<FormModalComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public ticketToUpdate: Ticket) {


      this.ticketForm = this.fb.group({
        title: [''], date: [''], numTicket: ['']
      });


    }


  ngOnInit() {

      this.ticketForm.controls.title.setValue(this.ticketToUpdate.title);
      this.ticketForm.controls.date.setValue(this.ticketToUpdate.date);
      this.ticketForm.controls.numTicket.setValue(this.ticketToUpdate.numTicket);
  }

  sendTicket(): void {
    const ticketToPost = this.ticketForm.value;
    this.ticketservice.createTicket(ticketToPost).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
  }

  updateTicket(): void {
    const ticketToUpdate: Ticket = this.ticketForm.value;
    ticketToUpdate.id = this.ticketToUpdate.id;

    this.ticketservice.updateTicket(ticketToUpdate).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
    this.ticketservice.editable = false;
  }

}
