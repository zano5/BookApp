import { AddBookService } from './../service/add-book.service';
import { TeacherBooksComponent } from './../component/teacher-books/teacher-books.component';
import { ActivityTeacherService } from './../service/activity-teacher.service';
import { TeacherService } from './../service/teacher.service';
import { CartService } from './../service/cart.service';
import { UserService } from './../service/user.service';
import { PaymentHistoryService } from './../service/payment-history.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  card = false;
  wallet = true;
  payment = {} as Payment;
  cartList = [];
  totalAmount = 0;
  newCartList = [];
  teacherList;
  activity = {} as Activity;
  teacher = {} as Teacher;
  profileUser;

  paymentCard = {} as Card;




  constructor(private router: Router, private paymentDao: PaymentHistoryService, private userDao: UserService, private cartDao: CartService, private teacherDao: TeacherService, private activityDao: ActivityTeacherService, private bookDao: AddBookService) {


    this.profileUser = this.userDao.getStudent();


    if (this.userDao.getStudent()) {

      console.log('user Okay');

       } else {

        this.router.navigateByUrl('signIn');

       }
   }

  ngOnInit() {



  }


  back(){


    this.router.navigateByUrl('location');

  }


  onWallet(){

    this.card = false;

  }


  onCard(){

    this.wallet = false;


  }


  walletPay() {


    for(let cart of this.cartList){

      this.totalAmount+= cart.price;

    }


    this.cartList = this.cartDao.getCart();


    console.log("itemList", this.cartList);


    for(let item of this.cartList){





      if(item.type== "content"){








        this.newCartList.push({key: item.key, name: item.name, description: item.description ,employeeNumber: item.employeeNumber, price: item.price,videoUrl: item.videoUrl, fileUrl: item.fileUrl, type: item.type });







      } else if((item.employeeNumber != null) && (item.type !='content')){




      this.newCartList.push({key: item.key, name: item.name ,author: item.author,
        description:item.description, price: item.price,pubDate: item.pubDate,
        course: item.course, specialization: item.specialization, type: item.type, url: item.url,
        employeeNumber: item.employeeNumber
       });



      } else if((item.studentNo != null) && (item.type != 'content')){







      this.newCartList.push({key: item.key, name: item.name ,author: item.author,
        description:item.description, price: item.price,pubDate: item.pubDate,
        course: item.course, specialization: item.specialization, type: item.type, url: item.url,
        studentNo: item.studentNo
       });



      }


      console.log('new List', this.newCartList);



    }












    if(this.userDao.getStudent()[0].bookAmount >= this.totalAmount){


    for(let cartItem of this.cartList){



      if(cartItem.type !='content'){
      this.bookDao.deleteBook(cartItem);
      }

      if((cartItem.employeeNumber != null) && (cartItem.employeeNumber != "")){



      this.activity.amount = cartItem.price;
      this.activity.message = "funds received";
      this.activity.userNumber = cartItem.employeeNumber;
      this.activity.status ="received";


      this.activityDao.createTeacherActivity(this.activity);



      this.teacherDao.getTeacherByEmployeeNumber(cartItem.employeeNumber).subscribe(data => {
        data.map(e => {


          let object = e.payload.doc.data() as Teacher;

          this.teacher.key =e.payload.doc.id;
          console.log("key", this.teacher.key );
          this.teacher.amount= object.amount;
          this.teacher.employeeNumber = object.employeeNumber;

          this.teacher.amount+=cartItem.price;


          console.log("teacher Amount",  this.teacher.amount)

          return this.teacher;




        })








       }





       )


       this.teacherDao.updateTheTeacher(this.teacher);

      }
    }




    if(this.newCartList.length> 0){


    this.payment.address = this.cartDao.getAddress();
    this.payment.studentNo = this.profileUser[0].studentNo;
    this.payment.itemsList = this.newCartList;
    this.payment.totalAmount = this.totalAmount;



    this.paymentDao.makePayment(this.payment).then(() =>{


      this.userDao.getStudent()[0].bookAmount = this.userDao.getStudent()[0].bookAmount - this.totalAmount;
      alert('Successfully Made Payment');





      this.userDao.updateStudent(this.userDao.getStudent()[0]);


      this.cartDao.cartList = [];


     this.router.navigateByUrl('detail-menu/books');
    }).catch(err => {

      alert(err.message+ 'Unable To Make Payment');
    })

  }

  }else{


    alert('You Do Not Have Enough Book Allowance');

  }









  }


  payCard(){


    if(this.paymentCard.cardNumber.toString().length < 16){

      alert("Length of card number can not be less than 16");

    }else if(this.paymentCard.cardMonth == null){

      alert("Card month can not be an empty string");

    }else if(this.paymentCard.cardYear == null){

      alert("Card Year can not be an empty string");

    }else{


      alert("Payment Made Successfully");

      this.router.navigateByUrl('detail-menu/books');


    }


  }






}
