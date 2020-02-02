import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  public users: User[] = [];


  constructor(private userService: UserService) {

    this.userService.getAllUsers()
    .subscribe((data) => {
      this.users =  data;
      console.log(this.users);
    });
   }

  ngOnInit() {
  }

  edit(): void {

  }

  delete(id: number)  {
    this.userService.deleteUser(id)
    .subscribe(data => (this.users.splice(id, 1)));
    console.log('delete');
    window.location.reload();
  }

}

