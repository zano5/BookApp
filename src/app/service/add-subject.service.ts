import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddSubjectService {




  constructor(private afs: AngularFirestore) {

  }


  addSubject(subject) {

    const fire = this.afs.collection('Subject');
    fire.add(subject).then(() => {


      alert('Successfully Added Subject');

    }).catch(err => {

      alert('Error ' +  err.message );
    });

  }

  updateSubject(subject) {

    const fire = this.afs.collection('Subject');
    fire.doc(subject.key).update(subject).then(() => {

      alert('Updated  Subject Successfully');

    }).catch(err => {

      alert('Error ' +  err.message );

    });

  }



  deleteSubject(subject) {

    const fire = this.afs.collection('Subject');
    console.log(subject);
    fire.doc(subject.key).delete().then( () => {

      alert('Deleted Subject Successfully');
    }).catch(err => {

      alert('Error ' +  err.message );
    });

  }


  getSubject() {

    return  this.afs.collection('Subject').snapshotChanges();

  }


  addStudentSubject(studentSubject) {


    const fire = this.afs.collection('StudentSubject').add(studentSubject);

    fire.then(() => {


      alert('Successfully Added  Subject');

    }).catch(err => {

      alert('Error ' + err.message);
    });


  }

  updateStudentSubject(studentSubject) {

    const fire = this.afs.collection('StudentSubject');
    fire.doc(studentSubject.key).update(studentSubject).then(() => {

      alert('Successfully Updted  Subject');
    }).catch(err => {

      alert('Error ' + err.message);

    });

  }


  deleteStudentSubject(studentSubject) {

    const fire = this.afs.collection('StudentSubject');

    fire.doc(studentSubject.key).delete().then(() => {

      alert('Successfully Deleted  Subject');
    }).catch(err => {

      alert('Error ' + err.message);
    });

  }

  getStudentSubject() {

    return this.afs.collection('StudentSubject').snapshotChanges();

  }


  getSubjectByStudent(studentNo) {


   return this.afs.collection('Subject', ref => ref.where('studentNo', '==',  parseInt(studentNo, 10))).snapshotChanges();

  }



  getSubjectBySubjectID(subjectID){


    return this.afs.collection('Subject', ref => ref.where('subjectID', '==', subjectID)).snapshotChanges();
  }




}
