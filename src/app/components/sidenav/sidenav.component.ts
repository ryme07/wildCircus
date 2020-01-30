import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  close() {
    this.sidenav.close();
  }

  show(): void {
    this.router.navigateByUrl('/show');
  }
  mainPage(): void {
    this.router.navigateByUrl('dashboard');
  }
  contactus(): void {
    this.router.navigateByUrl('/contact');
  }
  shop(): void {
    this.router.navigateByUrl('/shop');
  }
}
