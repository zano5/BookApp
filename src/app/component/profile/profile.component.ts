import { AddSubjectService } from './../../service/add-subject.service';
import { RecommendedBooksService } from 'src/app/service/recommended-books.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feature, MapboxService } from 'src/app/service/mapbox.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  checkAddress ="";
  moreRequest : boolean = false;
  moreRequestICT : boolean = false;
  coordinates : any;
  list : any;
  selectedAddress : string= "";
  lat;
  lng;
  addresses = [];


  profileForm: FormGroup;
  profileUser = 0;
  amount = 0;

  student = {
  key: '',
  name: '',
  surname: '',
  studentNo: 0,
  password: '',
  contact: 0,
  userID: '',
  gender: ''
  };

  event;
  uploadProgress;

  recommendedBookList = [];

  subjectList = [];

  mySubjectList = [];

  gender;





  // tslint:disable-next-line:max-line-length
  constructor( private fb: FormBuilder, private userDao: UserService, private router: Router, private rBookService: RecommendedBooksService, private subjectService: AddSubjectService,  private mapboxService: MapboxService) {

   this.profileUser = this.userDao.getStudent();



   if (this.userDao.getStudent()) {


    this.amount = this.profileUser[0].bookAmount;
    this.gender  = this.profileUser[0].gender;

    this.subjectService.getSubjectByStudent(this.profileUser[0].studentNo).subscribe(data => {



      this.subjectList = data.map(e => {

        return{
            key: e.payload.doc.id,
            ...e.payload.doc.data() as Subject
        } as Subject;





      });










    });


   } else {


    this.router.navigateByUrl('signIn');

   }


   }

  ngOnInit() {
  }







 upload(event) {

  this.event = event;

  console.log(event);

 }


 uploadImage() {

  const student =  this.profileUser[0];

  this.uploadProgress = this.userDao.uploadImage(this.event, student);

 }

 updateStudent() {

  this.profileUser[0].location = this.selectedAddress;


  const student =  this.profileUser[0];

  student.gender = this.gender;

  this.userDao.updateStudent(student);

 }




 onSelect(address, i) {
  this.selectedAddress = address;
  //  selectedcoodinates=

  console.log("lng:" + JSON.stringify(this.list[i].geometry.coordinates[0]))
  console.log("lat:" + JSON.stringify(this.list[i].geometry.coordinates[1]))
  this.lng = JSON.stringify(this.list[i].geometry.coordinates[0])
  this.lat = JSON.stringify(this.list[i].geometry.coordinates[1])
  // this.user.coords = [this.lng,this.lat];
  console.log("index =" + i)
  console.log(this.selectedAddress)
  // this.user.address = this.selectedAddress;
  this.addresses = [];
}


addressCheck(event){
  this.checkAddress = event.target.value;
  console.log("info",this.checkAddress);


}



search(event: any) {
  const searchTerm = event.target.value.toLowerCase();
  if (searchTerm && searchTerm.length > 0) {
    this.mapboxService.search_word(searchTerm)
      .subscribe((features: Feature[]) => {
        this.coordinates = features.map(feat => feat.geometry)
        this.addresses = features.map(feat => feat.place_name)
        this.list = features;
        console.log(this.list)
      });
  } else {
    this.addresses = [];
  }
}







}
