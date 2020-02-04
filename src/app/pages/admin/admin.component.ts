import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormModalComponent } from 'src/app/components/form-modal/form-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  public users: User[] = [];


  constructor(private userService: UserService, public dialog: MatDialog) {

    this.userService.getAllUsers()
    .subscribe((data) => {
      this.users =  data;
      console.log(this.users);
    });
   }

  ngOnInit() {
  }

  edit(user: User): void {
    this.userService.toUpdate = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '550px',
      data : user,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  delete(id: number)  {
    this.userService.deleteUser(id)
    .subscribe(data => (this.users.splice(id, 1)));
    console.log('delete');
    window.location.reload();
  }

}

