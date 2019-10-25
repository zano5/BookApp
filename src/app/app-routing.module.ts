import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdimOptionsMenuComponent } from './admin/adim-options-menu/adim-options-menu.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AddSpecializationComponent } from './admin/add-specialization/add-specialization.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { CreateSignInComponent } from './component/create-sign-in/create-sign-in.component';
import { StudentNoComponent } from './component/student-no/student-no.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyBooksComponent } from './component/my-books/my-books.component';
import { BooksComponent } from './component/books/books.component';
import { DetailMenuComponent } from './component/detail-menu/detail-menu.component';
import { MenuComponent } from './component/menu/menu.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { HSafetyComponent } from './component/h-safety/h-safety.component';
import { SearchComponent } from './component/search/search.component';
import { NLSearchComponent } from './component/n-lsearch/n-lsearch.component';

const routes: Routes = [
{path: '', component: MenuComponent, children: [

  {path: '', component: HomeComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'hSafety', component: HSafetyComponent},
  {path: 'studentNo', component: StudentNoComponent},


]},
{path: 'detail-menu', component: DetailMenuComponent, children: [


  {path: 'books', component: BooksComponent},
  {path: 'myBooks', component: MyBooksComponent},
  {path: 'profile', component: ProfileComponent}

]


}, {path: 'createSignIn', component: CreateSignInComponent},

{path: 'adminSign', component: AdminSignInComponent},

{path: 'adminMenu', component: AdminMenuComponent, children: [
  {path: '', component: AdminDashboardComponent}

]},
{path: 'course', component: AddCourseComponent},
{path: 'specialization', component: AddSpecializationComponent},
{path: 'adminOptions', component: AdimOptionsMenuComponent},
{path: 'search', component: SearchComponent},
{path: 'contact', component: AdminContactComponent},
{path: 'addStudent', component: AddStudentComponent},
{path: 'nSearch', component: NLSearchComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
