import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-no',
  templateUrl: './student-no.component.html',
  styleUrls: ['./student-no.component.scss']
})
export class StudentNoComponent implements OnInit {


  UserForm: FormGroup;


  constructor(private fb: FormBuilder) {


    this.UserForm =  this.fb.group({

      studentNo: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required]




  });
   }

  ngOnInit() {
  }


  formSubmit({value, valid}: {value: Student, valid: boolean})  {


  }



}
