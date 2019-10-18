import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {


  constructor(private afs: AngularFirestore) { }


  addCourse(course) {

    const courseFire  = this.afs.collection('course');
    courseFire.add(course).then(() => {

      alert('Successfully Added Course');
    });
  }


  deleteCourse(course) {

    const courseFire  = this.afs.collection('course');
    courseFire.doc(course.key).delete();
  }


  getCourse() {

    let courseFire;

    return  courseFire = this.afs.collection('course').snapshotChanges();

  }


  updateCourse(course) {
    const courseFire  = this.afs.collection('course');

    courseFire.doc(course.key).update(course).then(() => {

      alert('Updated Course Record');

    }).catch( err => {

      console.log('Error', err.message);

    });


  }
}



