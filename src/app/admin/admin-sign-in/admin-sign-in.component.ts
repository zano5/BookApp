import { Component, OnInit } from '@angular/core';
import { LoginDAOService } from 'src/app/service/login-dao.service';


@Component({
  selector: 'app-add-specialization',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent implements OnInit {

  loginUser = {

    email: '',
    password: ''
  };

  error = '';

  constructor( private loginDao: LoginDAOService) { }

  ngOnInit() {
  }


  login() {

    this.loginDao.signEmailPassword(this.loginUser);

  }
}
