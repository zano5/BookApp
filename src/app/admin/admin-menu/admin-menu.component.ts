import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  logout() {

    this.router.navigateByUrl('adminSign');

  }

  comments() {

    this.router.navigateByUrl('contact');

  }


}
