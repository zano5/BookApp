import { TeacherService } from 'src/app/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {


  teacher = {} as Teacher;


  teacherList = [];

  constructor(private router: Router, private teacherDao: TeacherService) { }

  ngOnInit() {


    this.teacherDao.getTeacherCount().subscribe(data => {


      this.teacherList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Teacher


        } as Teacher

      });



    })

  }


  addTeacher(){


    this.router.navigateByUrl("add-teacher");
  }


  updateTeacher() {


    this.teacherDao.updateTeacher(this.teacher);

  }


  deleteTeacher(teacher){



  }




update(teacher) {
  this.teacher = teacher;
}

}
