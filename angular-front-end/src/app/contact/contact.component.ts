import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ContactService } from "../contact.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactList = [];

  constructor(
    private contactService: ContactService,
    private authService: AuthService
  ) {}

  addContact(newContact) {
    this.contactService
      .addContact(newContact)
      .subscribe(contact => this.contactList.push(contact));
  }

  deleteContact(contactId) {
    this.contactService.deleteContact(contactId).subscribe();
    this.contactList = this.contactList.filter(
      contact => contact._id != contactId
    );
  }

  ngOnInit() {
    const userId = this.authService.getUserId();
    this.contactService.getContacts().subscribe(data => {
      this.contactList = data.filter(contact => contact.userId == userId);
    });
  }
}
