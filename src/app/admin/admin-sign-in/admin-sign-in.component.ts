import { LoginDAOService } from './../../service/login-dao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent implements OnInit {


  loginUser = {

    email: '',
    password: ''
  };

  error = '';

  constructor(private router: Router, private loginDao: LoginDAOService) { }

  ngOnInit() {
  }


  login() {

    this.loginDao.signEmailPassword(this.loginUser);

  }

}
