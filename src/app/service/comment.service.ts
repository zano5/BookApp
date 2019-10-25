import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private afs: AngularFirestore) { }


  addComment(content) {

    const fireComment = this.afs.collection('comment');

    fireComment.add(content).then(() => {



      alert('Successfully Added Comment');

    });

  }


  getComment() {

  }
}
