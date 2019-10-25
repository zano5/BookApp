import { AdminSpecializationService } from './../../service/admin-specialization.service';
import { Component, OnInit } from '@angular/core';
import { AdminCourseService } from 'src/app/service/admin-course.service';

@Component({
  selector: 'app-add-specialization',
  templateUrl: './add-specialization.component.html',
  styleUrls: ['./add-specialization.component.scss']
})
export class AddSpecializationComponent implements OnInit {

course;
  courseList = [];
  specialization = {

    name: '',
    specialID: '',
    courseName: ''

  };


  specializationList = [];


  constructor(private specializationService: AdminSpecializationService, private courseService: AdminCourseService) { }

  ngOnInit() {

    this.courseService.getCourse().subscribe(data => {


      this.courseList = data.map(e => {

        return{
            key: e.payload.doc.id,
            ...e.payload.doc.data()
        } as Course;


      });

  });


    this.specializationService.getSpecialization().subscribe(data => {

      this.specializationList = data.map(e => {

        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Specialization;

      });

});



  }

  addSpecialization() {

   this.specializationService.addSpecialization(this.specialization);

  }


  updateSpecialization() {

  }


  update(specialization) {

    this.specialization = specialization;

  }


  updateCourse() {

  }

}
