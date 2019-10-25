import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class RecommendedBooksService {

  constructor(private afs: AngularFirestore) { }



  addRecommendedBook(recommendBooks) {

      this.afs.collection('recommendedBook').add(recommendBooks).then(() => {

        alert('Successfully Added Recommended Book');
      });
  }

  getRecommendedBooks(studentNo) {

    console.log(studentNo);

    return this.afs.collection('recommendedBook',  ref => ref.where('studentNo', '==', parseInt(studentNo, 10))).snapshotChanges();

  }


  deleteRecommendedBook(recommendBook) {

    this.afs.collection('recommendedBook').doc(recommendBook.key).delete();

  }


  updateRecommendedBook(recommendBook) {
    this.afs.collection('recommendedBook').doc(recommendBook.key).update(recommendBook).then(() => {


          alert('Updated Recommended Books');

    });
  }
}
