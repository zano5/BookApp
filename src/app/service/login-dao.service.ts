import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginDAOService {



  userDao;




  constructor(private router: Router, private Adf: AngularFirestore, private fireAuth: AngularFireAuth ) {







   }


   signEmailPassword(login) {

    this.fireAuth.auth.signInWithEmailAndPassword(login.email, login.password).then(() => {

      this.router.navigateByUrl('adminMenu');



    });

   }

  //  async googleSignin() {
  //   const provider = new auth.GoogleAuthProvider();
  //   const credential = await this.fireAuth.auth.signInWithPopup(provider).then(()  => {

  //     this.router.navigateByUrl('tabs');


  //   }, err => {
  //       // tslint:disable-next-line:no-unused-expression
  //       console.log('danger', err.message);
  //   });
  // }




  userLogin(login) {

 // tslint:disable-next-line:max-line-length
 return this.userDao = this.Adf.collection('student',  ref => ref.where('studentNo', '==', parseInt(login.studentNo, 10))).snapshotChanges();

}

}
