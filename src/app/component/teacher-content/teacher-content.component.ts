import { combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ContentItemService } from 'src/app/service/content-item.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-content',
  templateUrl: './teacher-content.component.html',
  styleUrls: ['./teacher-content.component.scss']
})
export class TeacherContentComponent implements OnInit {


  contentItem ={} as ContentItem;
  contentList = [];
  eventFile;
  eventVideo;
  ref;
  task;
  uploadProgressFile;
  uploadProgressVideo;
  downloadURL;
  downloadVideoUrl;
  downloadFileUrl;
  content = {} as ContentItem;

  fileName;
  videoName;

  teacher;


  constructor(private router: Router, private contentDao: ContentItemService, private storage: AngularFireStorage, private teacherDao: TeacherService) {


    this.teacher = this.teacherDao.getTeacher();



  }

  ngOnInit() {


    this.getContent(this.teacher.employeeNumber);
  }

  back() {

    this.router.navigateByUrl('teacher-profile');
  }

  addContent() {

    this.content.type = 'content';

    this.contentDao.addContent(this.contentItem).then(data => {

      this.uploadContentVideo = this.uploadContentVideo(this.eventVideo);
      this.uploadContentFile = this.uploadContentFile(this.eventFile);
      this.contentItem.key = data.id;
      this.contentItem.fileUrl = this.downloadFileUrl;
      this.contentItem.videoUrl = this.downloadVideoUrl;
      this.contentItem.employeeNumber = this.teacher.employeeNumber;
      this.contentDao.updateContent(this.contentItem);


    }).catch(err =>{
        alert(err.message+ " Upload To Upload Content");
    });


  }

  uploadFile(event){

    this.eventFile = event;

  }

  uploadVideo(event){


    this.eventVideo = event;

  }



  uploadContentVideo(event){

     this.videoName = this.makeid(10) + '.mp4';

      const file = event.target.files[0];
      const filePath = 'uploads/contentItem/' + this.videoName;
      this.ref = this.storage.ref(filePath);

      this.task = this.storage.upload(filePath, file);

      this.downloadVideoUrl= this.videoName;

      return this.uploadProgressVideo = this.task.percentageChanges();

  }


  uploadContentFile(event){

   this.fileName = this.makeid(10) + '.pdf';
    // this.afs.upload('/upload/to/this-path', event.target.files[0]);

   // const randomId = Math.random().toString(36).substring(2);
      const file = event.target.files[0];
      const filePath = 'uploads/contentItem/' + this.fileName;
      this.ref = this.storage.ref(filePath);



      this.task = this.storage.upload(filePath, file);


      this.downloadFileUrl = this.fileName;





      return this.uploadProgressFile = this.task.percentageChanges();

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


 getContent(employeeNumber){


  this.contentDao.getContentByEmployeeNumber(employeeNumber).subscribe(data => {


    this.contentList = data.map(e => {


      return{


        key: e.payload.doc.id,
        ...e.payload.doc.data() as ContentItem

      } as ContentItem

    });

  });

 }


 update(content){


  this.content = content;


  console.log('Content Update', this.content);



 }


 updateContent(){

  this.contentDao.updateContent(this.content);
 }


 deleteContent(){


  this.contentDao.deleteContent(this.content);


 }




}
