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


  clear() {

    this.specialization.name = '';
    this.specialization.courseName = '';
    this.specialization.specialID =  '';
  }

  addSpecialization() {

    this.specializationService.addSpecialization(this.specialization);
    this.clear();

  }


  updateSpecialization() {

    this.specializationService.updateSpecialization(this.specialization);

  }


  update(specialization) {

    this.specialization = specialization;

  }


  deleteSpecialization() {

    this.specializationService.deleteSpecialization(this.specialization);

  }



}
