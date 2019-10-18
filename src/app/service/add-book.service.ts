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


    bookFire.add(book).then(() => {

      alert('Successfully Added Book');

    }).catch( err => {


        alert('Error adding book: ' + err.message);
    });

  }


  uploadBookImage(event, book) {

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

}
