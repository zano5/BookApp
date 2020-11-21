import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentHistoryService {

  constructor(private asf: AngularFirestore) { }



  makePayment(payment){


   return this.asf.collection('Payment').add(payment);



  }



  getPaymentByStudentID(studentNo){


   return this.asf.collection('Payment', ref=> ref.where('studentNo', '==', studentNo)).snapshotChanges();
  }



  getPaymentByEmployeeNumber(){

    return this.asf.collection('Payment').snapshotChanges();

  }


  updatePayment(item){

     this.asf.collection('Payment').doc(item.key).update(item);


  }

}
