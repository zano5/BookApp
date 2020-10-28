import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  teacher;

  constructor(private asf: AngularFirestore, private storage: AngularFireStorage) { }


  addTeacher(teacher) {

    this.asf.collection('Teachers').doc("TUT"+teacher.employeeNumber).set(teacher).then(() => {


    alert("Successfully Added Teacher");

    }).catch(err => {

      alert( err.message+ "  Unable To Add Teacher ");

    });


    // this.asf.doc('Teachers').collection('Teacher').add(teacher).then(() => {


    //   alert("Successfully Added Teacher");

    //   }).catch(err => {

    //     alert( err.message+ "  Unable To Add Teacher ");

    //   });

  }


  updateTeacher(teacher){


    this.asf.collection('Teachers').doc('TUT'+ teacher.employeeNumber).update(teacher).then(() => {


      alert('Details Updated');

    }).catch(err => {





    })


  }



  getTeacherCount(){

   return this.asf.collection('Teachers').snapshotChanges();
  }


  setTeacher(teacher){

    this.teacher = teacher;

  }

  getTeacher(){

    return this.teacher;
  }


  uploadTeacherBook(book){


  }
}
