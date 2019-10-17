import { Component, OnInit } from "@angular/core";

import { ContactService } from "../contact.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactList = [];

  addContact(newContact) {
    this.contactService
      .addContact(newContact)
      .subscribe(contact => this.contactList.push(contact));
  }
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      this.contactList = data;
    });
  }
}
