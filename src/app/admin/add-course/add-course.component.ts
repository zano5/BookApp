import { AdminCourseService } from './../../service/admin-course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {


  courseList = [];

  course = {


    name: '',
    courseID: ''

  };

  constructor(private courseService: AdminCourseService) {





  }

  ngOnInit() {


    this.courseService.getCourse().subscribe(data => {


      this.courseList = data.map(e => {

        return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
        } as Course;


      });

  });

  }

  addCourse() {

    this.courseService.addCourse(this.course);

  }


  update(course) {

    this.course = course;
    console.log(this.course);

  }


  updateCourse() {

    this.courseService.updateCourse(this.course);



  }




}
