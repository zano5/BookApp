import { AddSubjectService } from './../../service/add-subject.service';
import { Component, OnInit } from '@angular/core';
import { AdminSpecializationService } from 'src/app/service/admin-specialization.service';
import { AdminCourseService } from 'src/app/service/admin-course.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {


  courseID;
  specialID;

  subjectList = [];
  specializationList = [];

  subject = {
   subjectID: '',
    subjectName: '',
    bookIsbn: '',
    bookName: '',
    bookAuthor: '',
    bookDescription: '',
    bookPubDate: ''

  };


  uObjectSubject = {


    subjectID: '',
     subjectName: '',
     bookIsbn: '',
     bookName: '',
     bookAuthor: '',
     bookDescription: '',
     bookPubDate: ''

   };



  // tslint:disable-next-line:max-line-length
  constructor(private specializationService: AdminSpecializationService, private courseService: AdminCourseService, private subjectService: AddSubjectService) {



    this.subjectService.getSubject().subscribe(data => {


      this.subjectList = data.map(e => {

        return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
        } as Subject


      });

      console.log(this.subjectList);

  });






  }

  ngOnInit() {
  }


  addSubject() {


    if (this.subject.bookAuthor ===  '') {

      alert('Enter Author');

    } else if (this.subject.bookName === '') {

      alert('Enter Specialization ID');

    } else if (this.subject.subjectID === '') {

      alert('Enter Subject ID');

    } else if (this.subject.subjectName === '') {

      alert('Enter Subject Name');


    } else if (this.subject.bookIsbn === '') {

      alert('Enter Subject Name');

    } else if (this.subject.bookAuthor === '') {

      alert('Enter Book Author');

    } else if (this.subject.bookPubDate === '') {

      alert('Enter Book Publish Date');
    } else if (this.subject.bookDescription ==='' ) {

      alert('Enter Book Description');
    } else {


      this.subjectService.addSubject(this.subject);
      this.subject.bookAuthor = '';
      this.subject.subjectID = '';
      this.subject.subjectName = '';
      this.subject.bookName = '';
      this.subject.bookIsbn = '';
      this.subject.bookDescription = '';
      this.subject.bookPubDate = '';





    }

  }





  deleteSubject() {

    this.subjectService.deleteSubject(this.subject);
    this.subject.bookAuthor = '';
    this.subject.subjectID = '';
    this.subject.subjectName = '';
    this.subject.bookName = '';
    this.subject.bookIsbn = '';

  }


  upatdeModal(subject) {

    this.subject = subject;

  }


  updateSubject() {

    this.subjectService.updateSubject(this.subject);
  }

}
