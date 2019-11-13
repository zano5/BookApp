import { LoginDAOService } from 'src/app/service/login-dao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-wemail',
  templateUrl: './reset-wemail.component.html',
  styleUrls: ['./reset-wemail.component.scss']
})
export class ResetWEmailComponent implements OnInit {

  email;

  constructor(private router: Router, private loginDao: LoginDAOService) { }

  ngOnInit() {
  }


  close() {

    this.router.navigateByUrl('adminSign');
  }


  resetPassword() {


    if (this.email !== '') {

      this.loginDao.resetPassword(this.email);


    } else {


      alert('Please Enter Email Address');

    }

  }

}
