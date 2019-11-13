import { UserService } from 'src/app/service/user.service';
import { LoginDAOService } from 'src/app/service/login-dao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminStudentService } from 'src/app/service/admin-student.service';
import { AdminCourseService } from 'src/app/service/admin-course.service';
import { AdminSpecializationService } from 'src/app/service/admin-specialization.service';
import { RecommendedBooksService } from 'src/app/service/recommended-books.service';
import { AddSubjectService } from 'src/app/service/add-subject.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  subjectStudent = {

    key: '',
    studentNo: '',
    subjectID: ''
  };

  student = {

    studentNo: '',
    password: '',
    course: '',
    specialization: ''

  };

  subjectList = [];





  userInfo = [];

  adList = [];


  specialization;
  course;



courseList = [];
specializationList = [];

  specialObjectList = [];

  studentList = [];






  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private studentService: AdminStudentService, private courseService: AdminCourseService, private  specializationSevice: AdminSpecializationService, private recommendBookService: RecommendedBooksService, private loginDao: LoginDAOService, private  userDao: UserService, private subjectService: AddSubjectService, private specializationService: AdminSpecializationService) { }

  ngOnInit() {





    this.specializationService.getSpecialization().subscribe(data => {

      this.specializationList = data.map(e => {

        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Specialization;

      });

});


    this.studentService.getStudent().subscribe(data => {

      this.studentList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()

        } as Student;

      });


    });


    this.courseService.getCourse().subscribe(data => {

      this.courseList = data.map( e => {


          return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Course;


      });



    });







  }


  back() {

    this.router.navigateByUrl('adminMenu');

  }


  addStudent() {

    this.student.specialization = this.specialization;
    this.student.course = this.course;

    if (this.student.studentNo === '') {

      alert('Enter Student Number');

    } else if (this.student.password === '') {

      alert('Enter Student Password');

    }  else if (this.student.course === '') {

      alert('Enter Student Course');

    }  else if (this.student.specialization === '') {

      alert('Enter Student Specialization');

    } else {


      this.loginDao.userLogin(this.student).subscribe(data => {



        this.userInfo = data.map ( e => {

      return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Student;
        });

        console.log(this.userInfo);



        if (this.userInfo.length !== 0) {
        if ( this.userInfo[0].studentNo === this.student.studentNo) {


          alert('Student Already Exists');
          } else {


            alert('Oops! Network issue. Please Try Again');

          }

        } else {


          this.studentService.addStudent(this.student);


        }





      }) ;














    }




  }







}
