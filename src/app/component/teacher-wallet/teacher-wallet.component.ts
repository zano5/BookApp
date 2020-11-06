import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-wallet',
  templateUrl: './teacher-wallet.component.html',
  styleUrls: ['./teacher-wallet.component.scss']
})
export class TeacherWalletComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  back(){

    this.router.navigateByUrl('teacher-profile');

  }

}
