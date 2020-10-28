import { Component, OnInit } from '@angular/core';
import { LoginDAOService } from 'src/app/service/login-dao.service';
import { Router } from '@angular/router';


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

  constructor( private loginDao: LoginDAOService, private router: Router) { }

  ngOnInit() {
  }


  login() {

    this.loginDao.signEmailPassword(this.loginUser);

  }





resetPassword() {

this.router.navigateByUrl('resetEmail');

}
}
