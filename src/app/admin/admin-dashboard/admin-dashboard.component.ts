
import { AddSubjectService } from './../../service/add-subject.service';
import { AddSubjectComponent } from './../add-subject/add-subject.component';
import { AdminCourseService } from 'src/app/service/admin-course.service';
import { AdminSpecializationService } from './../../service/admin-specialization.service';
import { AdminStudentService } from './../../service/admin-student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecommendedBooksService } from 'src/app/service/recommended-books.service';
import { TeacherService } from 'src/app/service/teacher.service';

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

  subjectList;

  totSubject;


totTeachers;
  updateValue;
  totStudent;
  totCourse;
  totSpecialization;

  recommondedBook = {

    isbn: 0,
    name: '',
    studentNo: '',
    author: '',
    pubDate: ''

  };



  upRecBook = {
    key: '',
    isbn: 0,
    name: '',
    studentNo: ''

  };

  adList = [];


  specialization;

  recommendedBookList = [];


specialName;

courseList = [];
specializationList = [];

  specialObjectList = [];

  studentList = [];

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private studentService: AdminStudentService, private  specializationSevice: AdminSpecializationService, private courseService: AdminCourseService, private recommendBookService: RecommendedBooksService, private subjectService: AddSubjectService, private teacherDao: TeacherService ) { }

  ngOnInit() {



    this.specializationSevice.getSpecialization().subscribe(data => {


      this.specialObjectList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Specialization

        } as Specialization;

      });

      this.totSpecialization = this.specialObjectList.length;



    });

    this.studentService.getStudent().subscribe(data => {

      this.studentList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Student

        } as Student;

      });

      this.totStudent = this.studentList.length;

    });


    this.courseService.getCourse().subscribe(data => {

      this.courseList = data.map( e => {


          return{
            key: e.payload.doc.id,
            ...e.payload.doc.data() as Course
          } as Course;


      });


      this.totCourse = this.courseList.length;

    });


    this.subjectService.getSubject().subscribe(data => {


      this.subjectList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Subject


        } as Subject;

      });


      this.totSubject = this.subjectList.length;

    });


    this.teacherDao. getTeacherCount().subscribe(data => {



      this.totTeachers = data.length;



    })



  }

  addSubject() {

    this.router.navigateByUrl('subject');

  }


addCourse() {

  this.router.navigateByUrl('course');
}


addSpecialization() {

  this.router.navigateByUrl('specialization');
}


addStudent() {


  this.router.navigateByUrl('addStudent');


}


update(student) {
   this.student = student;
}

updateStudent() {



  this.studentService.updateStudent(this.student);

}








delete(i) {
  this.adList.splice(i, 1);
}


// tslint:disable-next-line:adjacent-overload-signatures
updateBook(i) {

  this.updateValue = i;

}


onSearchChange(searchValue: string): void {


  this.recommendBookService.getRecommendedBooks(searchValue).subscribe(data => {


    this.recommendedBookList = data.map(e => {


      return{

        key: e.payload.doc.id,
        ...e.payload.doc.data() as RecomendedBook

      } as RecomendedBook;

    });


    console.log('recommended', this.recommendedBookList);



});
}



deleteRecommendedBook(book) {

  this.recommendBookService.deleteRecommendedBook(book);

}

editBook(book) {

  this.upRecBook =  book;

}


updateRecomBook() {

  this.recommendBookService.updateRecommendedBook(this.upRecBook);


}

// tslint:disable-next-line:adjacent-overload-signatures
addRecommended() {

  if (this.recommondedBook.name === '') {


    alert('Please Add Recommended Book Name');

  } else if (this.recommondedBook.isbn === 0) {

    alert('Please Add Recommended Book ISBN');

  } else {

    console.log(this.recommondedBook);

    if (this.student.studentNo !== '') {


    this.recommondedBook.studentNo = this.student.studentNo;

    this.recommendBookService.addRecommendedBook(this.recommondedBook);

    this.recommondedBook.name = '';
    this.recommondedBook.isbn = 0;

    } else {

        alert('Student Number Required');

    }

  }




}




deleteStudent() {

  this.studentService.deleteStudent(this.student);

}


deleteOption(student) {

  this.student = student;
}


goTeacher() {

  this.router.navigateByUrl("teacher");
}


addSBook(){

  this.router.navigateByUrl("admin-book");
}











}
