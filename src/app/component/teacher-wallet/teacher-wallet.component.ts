import { ActivityTeacherService } from './../../service/activity-teacher.service';
import { TeacherService } from './../../service/teacher.service';
import { PaymentHistoryService } from './../../service/payment-history.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-wallet',
  templateUrl: './teacher-wallet.component.html',
  styleUrls: ['./teacher-wallet.component.scss']
})
export class TeacherWalletComponent implements OnInit {


  amount= 0;
  withdraw =0

  historyList = [];
  teacher;
  activityList = [];



  constructor(private router: Router, private paymentDao: PaymentHistoryService, private teacherDao: TeacherService, private activityDao: ActivityTeacherService) {

    this.teacher = this.teacherDao.getTeacher();
  }

  ngOnInit() {


    this.getPaymentHistory();

  }


  back(){

    this.router.navigateByUrl('teacher-profile');

  }

  goWithdraw() {

    this.amount = this.amount - this.withdraw;

    this.historyList.push(this.withdraw);
  }


  getPaymentHistory(){


    this.activityDao.getActivityByUserNumber(this.teacher.employeeNumber).subscribe(data=> {



      this.activityList = data.map(e => {

        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Activity
        } as Activity
      })

    })




        }













}
