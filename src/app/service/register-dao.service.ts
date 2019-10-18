import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegisterDAOService {

  constructor(private router: Router, private authFire: AngularFireAuth) { }


registerEmailAndPassword(login) {

this.authFire.auth.createUserWithEmailAndPassword(login.email, login.password).then(() => {


  alert('User login Details Created');
  this.router.navigateByUrl('/login');


});


}




}
