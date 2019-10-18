import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminSpecializationService {


  specialization = {

    specialID: '',
    name: ''

  };

  constructor(private afs: AngularFirestore) {


  }


  addSpecialization(specialization) {


    const specializationFire = this.afs.collection('specialization');

    specializationFire.add(specialization).then(() => {

      console.log('SuccessfullY added specialization');

    });

  }


  deleteSpecialization(specialization) {

    const specializationFire = this.afs.collection('specialization');

    specializationFire.doc(specialization.key).delete();

  }

  updateSpecialization(specialization) {

    const specializationFire = this.afs.collection('specialization');
    specializationFire.doc(specialization.key).update(specialization).then(() => {

      console.log('Successfully updated specialization record');
    });


  }


  getSpecialization() {

    let specializationFire;

    return specializationFire = this.afs.collection('specialization').snapshotChanges();

  }
}
