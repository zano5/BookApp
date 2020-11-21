import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityTeacherService {

  constructor(private asf: AngularFirestore) { }


  createTeacherActivity(activity){

    this.asf.collection('Activity').add(activity);


  }


  getActivityByUserNumber(userNumber){

    return   this.asf.collection('Activity', ref=> ref.where('userNumber', '==', userNumber)).snapshotChanges();
  }
}
