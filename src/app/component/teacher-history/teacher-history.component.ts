import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-history',
  templateUrl: './teacher-history.component.html',
  styleUrls: ['./teacher-history.component.scss']
})
export class TeacherHistoryComponent implements OnInit {


purchaseList = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }


  back(){


    this.router.navigateByUrl('teacher-profile');

  }

}
