import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<FormModalComponent>,
   ) {}


  ngOnInit() {}

  closeClick(): void {
    this.dialogRef.close();
  }


}
