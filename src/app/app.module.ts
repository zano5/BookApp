import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { RegisterComponent } from './component/register/register.component';
import { DetailComponent } from './component/detail/detail.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { DetailMenuComponent } from './component/detail-menu/detail-menu.component';
import { BooksComponent } from './component/books/books.component';
import { MyBooksComponent } from './component/my-books/my-books.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StudentNoComponent } from './component/student-no/student-no.component';
import { CreateSignInComponent } from './component/create-sign-in/create-sign-in.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddSpecializationComponent } from './admin/add-specialization/add-specialization.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AdimOptionsMenuComponent } from './admin/adim-options-menu/adim-options-menu.component';
import { HSafetyComponent } from './component/h-safety/h-safety.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';




const firebaseConfig = {
  apiKey: 'AIzaSyB64l4o9pqgvmv9RFFOJffhF2-nU-_6Wkg',
  authDomain: 'micampusexchange.firebaseapp.com',
  databaseURL: 'https://micampusexchange.firebaseio.com',
  projectId: 'micampusexchange',
  storageBucket: 'micampusexchange.appspot.com',
  messagingSenderId: '1082426288798',
  appId: '1:1082426288798:web:47b1a10fe7bf8d2a99a98f',
  measurementId: 'G-BKW3MSK6PL'
};

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    DetailComponent,
    HomeComponent,
    MenuComponent,
    DetailMenuComponent,
    BooksComponent,
    MyBooksComponent,
    ProfileComponent,
    AddBookComponent,
    StudentNoComponent,
    CreateSignInComponent,
    AddStudentComponent,
    AdminDashboardComponent,
    AddCourseComponent,
    AddSpecializationComponent,
    AdminMenuComponent,
    AdimOptionsMenuComponent,
    HSafetyComponent,
    AdminSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
