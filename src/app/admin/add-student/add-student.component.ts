import { UserService } from 'src/app/service/user.service';
import { LoginDAOService } from 'src/app/service/login-dao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminStudentService } from 'src/app/service/admin-student.service';
import { AdminCourseService } from 'src/app/service/admin-course.service';
import { AdminSpecializationService } from 'src/app/service/admin-specialization.service';
import { RecommendedBooksService } from 'src/app/service/recommended-books.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  student = {

    studentNo: '',
    password: '',
    course: '',
    specialization: '',

  };


  recommondedBook = {

    isbn: 0,
    name: '',
    studentNo: ''

  };



  upRecBook = {
    key: '',
    isbn: 0,
    name: '',
    studentNo: ''

  };

  userInfo = [];

  adList = [];


  specialization;


specialName;

courseList = [];
specializationList = [];

  specialObjectList = [];

  studentList = [];

  recommendedBookList = [];

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private studentService: AdminStudentService, private courseService: AdminCourseService, private  specializationSevice: AdminSpecializationService, private recommendBookService: RecommendedBooksService, private loginDao: LoginDAOService, private  userDao: UserService ) { }

  ngOnInit() {




    this.specializationSevice.getSpecialization().subscribe(data => {


      this.specialObjectList = data.map(e => {

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



      // this.userInfo = this.userDao.getAdminStudent();











    }


  }


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


  onSearchChange(searchValue: string): void {


    this.recommendBookService.getRecommendedBooks(searchValue).subscribe(data => {


      this.recommendedBookList = data.map(e => {


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()

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

}
