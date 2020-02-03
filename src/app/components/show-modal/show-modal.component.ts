import { Show } from './../../shared/models/show';
import { Component, OnInit, Inject } from '@angular/core';
import { ShowService } from 'src/app/shared/services/show.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.component.html',
  styleUrls: ['./show-modal.component.scss']
})
export class ShowModalComponent implements OnInit {

  show = new Show();

constructor(public showservice: ShowService, public dialogRef: MatDialogRef<ShowModalComponent>,
            @Inject(MAT_DIALOG_DATA) public showToUpdate: Show) { }

ngOnInit() {
  this.show = this.showToUpdate;
  }

updateShow(show: Show): void {

this.showservice.updateShow(show).subscribe();
this.dialogRef.close();
  }

closeClick() {
  this.dialogRef.close();

  }


}
