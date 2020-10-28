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
import { SearchComponent } from './component/search/search.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { NLSearchComponent } from './component/n-lsearch/n-lsearch.component';
import { ResetWEmailComponent } from './component/reset-wemail/reset-wemail.component';
import { AdminSubjectComponent } from './component/admin-subject/admin-subject.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { TeacherProfileComponent } from './component/teacher-profile/teacher-profile.component';
import { TeacherBooksComponent } from './component/teacher-books/teacher-books.component';
import { TeacherHistoryComponent } from './component/teacher-history/teacher-history.component';




const firebaseConfig = {
  apiKey: 'AIzaSyABYTAH95oVFpVllC0hpX1OirxV85gclaQ',
  authDomain: 'miexchangeapp.firebaseapp.com',
  databaseURL: 'https://miexchangeapp.firebaseio.com',
  projectId: 'miexchangeapp',
  storageBucket: 'miexchangeapp.appspot.com',
  messagingSenderId: '229928549256',
  appId: '1:229928549256:web:642c6b66f10307f3b4583d',
  measurementId: 'G-N6K9CNC9YK'
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
    AdminSignInComponent,
    SearchComponent,
    AdminContactComponent,
    NLSearchComponent,
    ResetWEmailComponent,
    AdminSubjectComponent,
    AddSubjectComponent,
    TeacherComponent,
    AddTeacherComponent,
    TeacherProfileComponent,
    TeacherBooksComponent,
    TeacherHistoryComponent
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
