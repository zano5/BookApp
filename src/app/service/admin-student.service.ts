import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentService {

  constructor(private afs: AngularFirestore) { }


addStudent(student) {

  console.log(student);

  const studentFire = this.afs.collection('student');
  studentFire.add(student).then(() => {

    alert('Successfully Added Student');
  });



}



deleteStudent(student) {

  const studentFire = this.afs.collection('student');
  studentFire.doc(student.key).delete();



}


getStudent() {

let studentFire;

return studentFire = this.afs.collection('student').snapshotChanges();
}


updateStudent(student) {

  console.log(student);

  const studentFire = this.afs.collection('student').doc(student.key);
  studentFire.update(student).then(() => {

      alert('Successfully Updated Record');

  }).catch(err => {

    console.log('error', err.message);
  });

}



}
