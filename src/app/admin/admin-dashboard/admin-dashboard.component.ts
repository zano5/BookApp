import { AdminCourseService } from 'src/app/service/admin-course.service';
import { AdminSpecializationService } from './../../service/admin-specialization.service';
import { AdminStudentService } from './../../service/admin-student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  student = {

    studentNo: '',
    password: '',
    course: '',
    specialization: ''

  };

  totStudent;
  totCourse;
  totSpecialization;


  specialization;


specialName;

courseList = [];
specializationList = [];

  specialObjectList = [];

  studentList = [];

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private studentService: AdminStudentService, private  specializationSevice: AdminSpecializationService, private courseService: AdminCourseService) { }

  ngOnInit() {



    this.specializationSevice.getSpecialization().subscribe(data => {


      this.specialObjectList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()

        } as Specialization;

      });

      this.totSpecialization = this.specialObjectList.length;



    });

    this.studentService.getStudent().subscribe(data => {

      this.studentList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()

        } as Student;

      });

      this.totStudent = this.studentList.length;

    });


    this.courseService.getCourse().subscribe(data => {

      this.courseList = data.map( e => {


          return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Course;


      });


      this.totCourse = this.courseList.length;

    });


  }


addCourse() {

  this.router.navigateByUrl('course');

}


addSpecialization() {

  this.router.navigateByUrl('specialization');
}


addStudent() {



  this.student.specialization = this.specialization;


  this.studentService.addStudent(this.student);

}


update(student) {
   this.student = student;
}

updateStudent() {

  console.log('zano');

  this.studentService.updateStudent(this.student);

}




}
