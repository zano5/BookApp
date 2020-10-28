import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadContentService {

  constructor(private asf: AngularFirestore) {

   }
}
