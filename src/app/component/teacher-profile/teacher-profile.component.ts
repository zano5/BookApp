import { TeacherService } from 'src/app/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {


  teacher;

  constructor(private router: Router, private teacherDao: TeacherService) { }

  ngOnInit() {

    this.teacher = this.teacherDao.getTeacher();

    console.log(this.teacher);
  }


  goHistory() {


    this.router.navigateByUrl('teacher-history');
  }

  goBooks() {


    this.router.navigateByUrl('teacher-books');

  }

  setTeacher(teacher) {

    this.teacher = teacher;

  }

  getTeacher() {

    return this.teacher;
  }

 updateTeacher() {

    this.teacherDao.updateTeacher(this.teacher);

  }


  goWallet(){

    this.router.navigateByUrl('teacher-wallet');
  }


  goContent(){

    this.router.navigateByUrl('teacher-content');
  }

  signOut(){

    this.router.navigateByUrl('signIn')
  }



}
