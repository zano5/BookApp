import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(private afs: AngularFirestore) { }


  addComment(content) {

    const fireComment = this.afs.collection('comment');

    fireComment.add(content).then(() => {



      alert('Successfully Added Comment');

    });

  }


  getComment() {

     return this.afs.collection('comment').snapshotChanges();


  }
}
