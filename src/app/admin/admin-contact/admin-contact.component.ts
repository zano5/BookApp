import { ContentService } from './../../service/content.service';
import { CommentService } from './../../service/comment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {


  contactList = [];

  contact;


  constructor(private contactService: ContentService, private router: Router) {




  }

  ngOnInit() {

    this.contactService.getComment().subscribe(data => {

      this.contactList = data.map(e => {

        return {

          key: e.payload.doc.id,
          ...e.payload.doc.data()

        } as Content;

      });

    });
  }

  viewComment(contact) {

    this.contact = contact;

  }


  back() {

    this.router.navigateByUrl('adminMenu');

  }


  deleteModal(contact) {

    this.contact = contact;

  }


  deleteContact() {


    this.contactService.deleteComment(this.contact);

  }

}
