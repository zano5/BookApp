import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adim-options-menu',
  templateUrl: './adim-options-menu.component.html',
  styleUrls: ['./adim-options-menu.component.scss']
})
export class AdimOptionsMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {

    this.router.navigateByUrl('adminSign');
  }

  back() {

    this.router.navigateByUrl('adminMenu');
  }

}
