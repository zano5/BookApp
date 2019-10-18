import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  signOut() {

    this.router.navigateByUrl('');

  }

}
