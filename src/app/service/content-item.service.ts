import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ContentItemService {

  ref;
task;
uploadProgress;
downloadURL;
downloadVideoUrl;
downloadFileUrl;

  constructor(private asf: AngularFirestore, private storage: AngularFireStorage) { }



  addContent(content){

  return this.asf.collection('Content').add(content)
  }


  updateContent(content){

   return this.asf.collection('Content').doc(content.key).update(content)
  }


  uploadContentVideo(event){

    const videoName = this.makeid(10) + '.mp4';
    // this.afs.upload('/upload/to/this-path', event.target.files[0]);
 
   // const randomId = Math.random().toString(36).substring(2);
      const file = event.target.files[0];
      const filePath = 'uploads/contentItem/' + videoName;
      this.ref = this.storage.ref(filePath);
 
      this.task = this.storage.upload(filePath, file);
 
    
      this.downloadVideoUrl= videoName;
 
 
 
 
      return this.uploadProgress = this.task.percentageChanges();
    
  }


  uploadContentFile(event){

    const fileName = this.makeid(10) + '.pdf'
    // this.afs.upload('/upload/to/this-path', event.target.files[0]);
 
   // const randomId = Math.random().toString(36).substring(2);
      const file = event.target.files[0];
      const filePath = 'uploads/contentItem/' + fileName;
      this.ref = this.storage.ref(filePath);
 
      this.task = this.storage.upload(filePath, file);
 
    
      this.downloadFileUrl = fileName;
 
 
 
 
      return this.uploadProgress = this.task.percentageChanges();
    
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

  }
