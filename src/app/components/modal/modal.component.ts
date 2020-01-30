import { Ticket } from './../../shared/models/ticket';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  createTicket: Ticket;
  ticketForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public ticketUpdate: Ticket) { }

ngOnInit() {
}

closeClick(): void {
this.dialogRef.close();
}

sendTicket(): void {

}

}
