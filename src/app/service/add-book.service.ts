import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  ref;
  task;
  uploadProgress;


downloadURL;






  constructor(private afd: AngularFirestore, private afs: AngularFireStorage) {



   }


  addBook(book) {

    const bookFire = this.afd.collection('books');

    console.log('serviceBook', book);


    bookFire.add(book).then(() => {

      alert('Successfully Added Book');

    }).catch( err => {


        alert('Error adding book: ' + err.message);
    });

  }


  uploadTeacherBook(event, teacherBook){


    const bookName = this.makeid(10) + '.jpg';
   // this.afs.upload('/upload/to/this-path', event.target.files[0]);

  // const randomId = Math.random().toString(36).substring(2);
    const file = event.target.files[0];
    const filePath = 'uploads/books/' + bookName;
    this.ref = this.afs.ref(filePath);

    this.task = this.afs.upload(filePath, file);

    teacherBook.url = bookName;

    this.addTeacherBook(teacherBook);
    this.addBook(teacherBook);




    return this.uploadProgress = this.task.percentageChanges();

  }






  uploadBookImage(event, book) {

    if(event != null){


      const bookName = this.makeid(10) + '.jpg';
      // this.afs.upload('/upload/to/this-path', event.target.files[0]);

     // const randomId = Math.random().toString(36).substring(2);
        const file = event.target.files[0];
        const filePath = 'uploads/books/' + bookName;
        this.ref = this.afs.ref(filePath);

        this.task = this.afs.upload(filePath, file);

        book.url = bookName;

        this.addBook(book);





        return this.uploadProgress = this.task.percentageChanges();

    }else{


      alert("Add Image");
    }




  }

   retreiveImage(image) {

    console.log(image);
    const ref = this.afs.ref('uploads/books/' + image);
    return    ref.getDownloadURL();

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

updateBook(book) {

   const bookFire = this.afd.collection('books');

   console.log(book.key);


   bookFire.doc(book.key).update(book).then(() => {

      alert('Successfully updated book record');


  }).catch(err => {

    alert('Error updating book: ' + err.message);
  });

}


deleteBook(book) {

  const bookFire = this.afd.collection('books');
  bookFire.doc(book.key).delete().then(() => {

    alert(book.name + ' book deleted  from Database' );

  }).catch(err => {


    alert('Error deeleting book: ' + err.message);

  });

}


getBooks() {

  const bookFire = this.afd.collection('books');
  return bookFire.snapshotChanges();
}


getMyBooks(student) {
  const bookFire = this.afd.collection('books',   ref => ref.where('studentNo', '==', parseInt(student.studentNo, 10)));
  return bookFire.snapshotChanges();
}


getBooksSearch(name) {


  console.log('service', name);

  const bookFire = this.afd.collection('books',   ref => ref.where('name', '==', name ));
  return bookFire.snapshotChanges();

}

reserveBook(book) {


  const bookFire = this.afd.collection('books');

  console.log(book.key);


  bookFire.doc(book.key).update({reservedBy: parseInt(book.studentNo, 10), reserved: 'yes'}).then(() => {

     alert('Successfully reserved book record');


 }).catch(err => {

   alert('Error reserved book: ' + err.message);
 });

}


cancelReserve(book) {

  const bookFire = this.afd.collection('books');

  console.log(book.key);


  bookFire.doc(book.key).update({reservedBy: '', reserved: 'no'}).then(() => {

     alert('Successfully cancelled book reservation');


 }).catch(err => {

   alert('Error reserved book: ' + err.message);
 });

}



addTeacherBook(teacherBook) {


  this.afd.collection('TeacherBook').add(teacherBook).catch(() => {






  }).catch(err => {





  });
}


getTeacherBook(teacher){

  return this.afd.collection('TeacherBook', ref => ref.where('employeeNumber', '==', teacher.employeeNumber) ).snapshotChanges();
}


getByTypeBooks(type) {


  return this.afd.collection('books', ref=> ref.where('type', '==', type )).snapshotChanges();
}


getAllBooks(){

  return this.afd.collection('books').snapshotChanges();

}


getTeacherBooksByEM(employeeNumber){


  return this.afd.collection("books", ref => ref.where('employeeNumber', '==', employeeNumber)).snapshotChanges();


}


}

