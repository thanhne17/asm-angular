import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contact!: IContact[];
  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactService.getContact().subscribe((data) => {
      this.contact = data
      console.log(this.contact);
      
    })

  }

}
