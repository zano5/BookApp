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

  userInfo;
  user = {
    studentNo: '',
    password: ''
  };




  constructor(private router: Router, private UserDao: UserService, private loginService: LoginDAOService) { }

  ngOnInit() {
  }


  moveDetail() {

    console.log(this.user.studentNo);

    console.log(this.user.password);


    this.loginService.userLogin(this.user).subscribe(data => {



      this.userInfo = data.map ( e => {



        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
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

  }
