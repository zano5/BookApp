import { PaymentHistoryService } from './../../service/payment-history.service';
import { TeacherService } from './../../service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-history',
  templateUrl: './teacher-history.component.html',
  styleUrls: ['./teacher-history.component.scss']
})
export class TeacherHistoryComponent implements OnInit {


purchaseList = [];
teacher;

  constructor(private router: Router, private teacherDao:TeacherService, private paymentDao: PaymentHistoryService) {


    this.teacher = this.teacherDao.getTeacher();
  }

  ngOnInit() {


    this.getPaymentHistory();
  }


  back(){


    this.router.navigateByUrl('teacher-profile');

  }


  getPaymentHistory(){


    this.paymentDao.getPaymentByEmployeeNumber().subscribe(data =>{


      data.map(e => {


        let object = e.payload.doc.data() as Payment



        for( let item of object.itemsList){


          if(this.teacher.employeeNumber == item.employeeNumber){



            if(item.type== "content"){


              this.purchaseList.push({key: item.key, name: item.name, description: item.description ,employeeNumber: item.employeeNumber, price: item.price,videoUrl: item.videoUrl, fileUrl: item.fileUrl, type: item.type, buyerStudent: object.studentNo, buyerEmployee: object.employeeNumber  });




            } else if((item.employeeNumber != null) && (item.type !='content')){



            this.purchaseList.push({key: item.key, name: item.name ,author: item.author,
              description:item.description, price: item.price,pubDate: item.pubDate,
              course: item.course, specialization: item.specialization, type: item.type, url: item.url,
              employeeNumber: item.employeeNumber, buyerStudent: object.studentNo, buyerEmployee: object.employeeNumber
             });


            }



          }


        }


      })


    })



  }

}
