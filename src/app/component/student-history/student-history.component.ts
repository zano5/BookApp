import { PaymentHistoryService } from './../../service/payment-history.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-student-history',
  templateUrl: './student-history.component.html',
  styleUrls: ['./student-history.component.scss']
})
export class StudentHistoryComponent implements OnInit {


  paymentList =[];
  profileUser;
  student;

  constructor(private paymentDao: PaymentHistoryService, private studentDao: UserService, private storage: AngularFireStorage) {


    this.profileUser = this.studentDao.getStudent();
    this.student = this.profileUser[0];
  }

  ngOnInit() {

    this.getPaymentHistory();
  }


  getPaymentHistory(){


    this.paymentDao.getPaymentByStudentID(this.student.studentNo).subscribe(data => {


        data.map(e=> {



          let object = e.payload.doc.data() as Payment;


          for(let item of object.itemsList){


            if(item.type == "content"){


              this.paymentList.push({key: item.key, name: item.name, description: item.description ,employeeNumber: item.employeeNumber, price: item.price,videoUrl: item.videoUrl, fileUrl: item.fileUrl, type: item.type });

            } else if((item.employeeNumber != null) && (item.type !='content')){

            this.paymentList.push({key: item.key, name: item.name ,author: item.author,
              description:item.description, price: item.price,pubDate: item.pubDate,
              course: item.course, specialization: item.specialization, type: item.type, url: item.url,
              employeeNumber: item.employeeNumber, videoUrl: item.videoUrl, fileUrl: item.fileUrl
             });

            } else if((item.studentNo != null) && (item.type != 'content')){

            this.paymentList.push({key: item.key, name: item.name ,author: item.author,
              description:item.description, price: item.price,pubDate: item.pubDate,
              course: item.course, specialization: item.specialization, type: item.type, url: item.url,
              studentNo: item.studentNo, videoUrl: item.videoUrl, fileUrl: item.fileUrl
             });


            }



          }


        })

    })

  }


  download(payment){




    // this.storage.ref('uploads/contentItem/'+ payment.fileUrl).getDownloadURL().subscribe(data => {

    //   window.open(data);
    // });

  }


  openVideo(payment){
    this.storage.ref('uploads/contentItem/'+ payment.videoUrl).getDownloadURL().subscribe(data => {

      window.open(data);
    });

  }

  openFile(payment){

    this.storage.ref('uploads/contentItem/'+ payment.fileUrl).getDownloadURL().subscribe(data => {

      window.open(data);
    });

  }

}
