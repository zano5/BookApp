import { RecommendedBooksService } from 'src/app/service/recommended-books.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  profileUser = 0;

  student = {
  key: '',
  name: '',
  surname: '',
  studentNo: 0,
  password: '',
  contact: 0,
  userID: '',
  gender: ''
  };

  event;
  uploadProgress;

  recommendedBookList = [];



  // tslint:disable-next-line:max-line-length
  constructor( private fb: FormBuilder, private userDao: UserService, private router: Router, private rBookService: RecommendedBooksService) {

   this.profileUser = this.userDao.getStudent();

   if (this.userDao.getStudent()) {

    this.rBookService.getRecommendedBooks(this.profileUser[0].studentNo).subscribe(data => {


      this.recommendedBookList = data.map(e => {


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()

        } as RecomendedBook;


      });



    });




   } else {


    this.router.navigateByUrl('signIn');

   }


   }

  ngOnInit() {
  }







 upload(event) {

  this.event = event;

  console.log(event);

 }


 uploadImage() {

  const student =  this.profileUser[0];

  this.uploadProgress = this.userDao.uploadImage(this.event, student);

 }

 updateStudent() {

  const student =  this.profileUser[0];

  this.userDao.updateStudent(student);

 }









}
