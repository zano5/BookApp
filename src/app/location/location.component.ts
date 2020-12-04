import { UserService } from './../service/user.service';
import { CartService } from './../service/cart.service';
import { Feature, MapboxService } from './../service/mapbox.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {


  checkAddress ="";

  delivery = false;
  collect = true;

  moreRequest : boolean = false;
  moreRequestICT : boolean = false;
  coordinates : any;
  list : any;
  selectedAddress : string= "";
  lat;
  lng;


  addresses = [];
  profileUser


  address = {} as Address;

  constructor(private router: Router, private mapboxService: MapboxService, private cartDao: CartService, private userDao: UserService ) {


    this.profileUser = this.userDao.getStudent();


    if (this.userDao.getStudent()) {

      console.log('user Okay');

       } else {

        this.router.navigateByUrl('signIn');

       }



  }

  ngOnInit() {
  }



  back(){

    this.router.navigateByUrl('cart');

  }


  submit(){


    if(this.address.location == null ){

      alert('Enter Location');
    }else if(this.address.complex == null){

      alert('Enter Complex');
    }else if(this.address.unit == null){

      alert('Enter Unit');
    }else if(this.address.description == null){

      alert('Enter Description');

    }else{
    this.address.location = this.selectedAddress;


    this.cartDao.addAddress(this.address);
    this.router.navigateByUrl('payment-detail');
    }

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


  addressCheck(event){
    this.checkAddress = event.target.value;
    console.log("info",this.checkAddress);


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


onDelivery(){

  this.collect = false;
  this.delivery = true;



}


onCollect(){


  this.delivery = false;
  this.collect = true;


}


submitCollect(){

  if(this.address.location == null ){

    alert('Enter Location');
  }else{


    this.address.location = this.selectedAddress;


    this.cartDao.addAddress(this.address);
    this.router.navigateByUrl('payment-detail');
  }

}



}
