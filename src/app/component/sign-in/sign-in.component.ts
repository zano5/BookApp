import { TeacherService } from 'src/app/service/teacher.service';
import { LoginDAOService } from './../../service/login-dao.service';
import { UserService } from './../../service/user.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  teacherUser = {} as Teacher;

  tradeSource1;
  tradeSource2;
  teacher = false;
  student = true;
  userInfo;
  user = {
    studentNo: '',
    password: ''
  };




  constructor(private router: Router, private UserDao: UserService, private loginService: LoginDAOService, private teacherDao: TeacherService) { }

  ngOnInit() {
  }


  moveDetail() {

    console.log(this.user.studentNo);

    console.log(this.user.password);


    if(this.student == true) {



    this.loginService.userLogin(this.user).subscribe(data => {



      this.userInfo = data.map ( e => {



        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Student
        } as Student;
      });

      console.log(this.userInfo);

      if (this.userInfo[0].password === this.user.password) {


        this.UserDao.saveUser(this.userInfo);
        this.router.navigateByUrl('detail-menu/books');

    } else {

      alert('Incorrect Login Detail!');

    }






    }) ;

  } else if (this.teacher == true ){

    this.loginService.teacherLogin(this.user).subscribe(data => {

     this.teacherUser = data.data() as Teacher;

     if((this.user.studentNo == this.teacherUser.employeeNumber) && (this.user.password == this.teacherUser.password) ) {

  this.teacherDao.setTeacher(this.teacherUser);


console.log("teacher",data);

    this.router.navigateByUrl("teacher-profile");


  } else{

    alert("Inccorrect Login Details");
  }

    });







  }else{


    alert("Select User Type");
  }


  }

  // google() {

  //   this.loginService.googleSignin();

  // }


  // createSignIn() {

  //   this.router.navigateByUrl('createSignIn');

  // }


  adminLogin() {

    this.router.navigateByUrl('adminSign');

  }


  onStudent(){

    this.teacher = false;
  }


  onTeacher(){
    this.student = false;
  }

  }
