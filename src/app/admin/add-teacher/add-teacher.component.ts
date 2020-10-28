

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {



  teacher = {} as Teacher;

  constructor(private router: Router, private techerDao: TeacherService) { }

  ngOnInit() {
  }


  back() {

    this.router.navigateByUrl('adminMenu');

  }


  addTeacher(){


    if(this.teacher.employeeNumber = "" ){

      alert("Enter Teacher Employee Number");


    } else if(this.teacher.password = "" ){


      alert("Enter Teacher Password");

    }
    else{


  this.techerDao.addTeacher(this.teacher);
  this.teacher.employeeNumber = "";
  this.teacher.password = "";

    }



  }



}
