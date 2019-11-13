import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDao;
  ref;
  task;
  uploadProgress;

  student;
  adminStudent;

  constructor(private afd: AngularFirestore, private afs: AngularFireStorage) {

    this.userDao = this.afd.collection('student');
  }

  saveUser(student) {

    this.student = student;

  }

  saveAdminStudent(adminStudent) {

    this.adminStudent = adminStudent;

  }

  getAdminStudent() {

     return this.adminStudent;

  }

  getStudent() {
    console.log(this.student);
    return this.student;
  }

  updateStudent(student) {

    console.log('student key', student.key);

    this.userDao.doc(student.key).update(student).then(() => {

      alert('Successfully Updated Profile');
    }).catch(err => {

      console.log('Error', err.message);
    });

  }


  uploadImaageUpdateStud(event, student) {


    const profileName = this.makeid(10) + '.jpg';
    // this.afs.upload('/upload/to/this-path', event.target.files[0]);

   // const randomId = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = 'uploads/profile/' + profileName;
    this.ref = this.afs.ref(filePath);

    this.task = this.afs.upload(filePath, file);

    student.url = profileName;

    this.updateStudent(student);




  }



  makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (  let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


 retreiveImage(image) {

  console.log(image);
  const ref = this.afs.ref('uploads/profile/' + image);
  return    ref.getDownloadURL();

}

uploadImage(event, student) {
  const profileName = this.makeid(10) + '.jpg';

  const file = event.target.files[0];
  const filePath = 'uploads/profile/' + profileName;
  this.ref = this.afs.ref(filePath);

  this.task = this.afs.upload(filePath, file);

  student.url = profileName;

  this.updateStudent(student);


  return this.uploadProgress = this.task.percentageChanges();



}





}
