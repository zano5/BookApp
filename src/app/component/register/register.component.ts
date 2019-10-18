import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  student = {

  studentNo: 0,
  password: '',
  userID: ''


  };


  signUpForm: FormGroup;


  constructor(private fb: FormBuilder) {


    this.signUpForm =  this.fb.group({

      studentNo: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]




  });
   }

  ngOnInit() {
  }


  formSubmit({value, valid}: {value: SignUp, valid: boolean})  {



 }

}
