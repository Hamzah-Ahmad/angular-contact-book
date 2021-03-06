import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactService } from "../contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.css"]
})
export class EditContactComponent implements OnInit {
  contact;
  contactId;
  name: "";
  phone: "";
  email: "";
  type: "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {
    console.log("Reached edit");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contactId = params.get("id");
      this.contactService
        .getContactById(params.get("id"))
        .subscribe(contact => {
          this.contact = contact;
          this.name = this.contact.name;
          this.phone = this.contact.phone;
          this.email = this.contact.email;
          this.type = this.contact.type;
        });
    });
  }

  editContact() {
    const newContact = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      type: this.type,
      userId: JSON.parse(localStorage.getItem("user"))
    };
    this.contactService.editContact(this.contactId, newContact).subscribe();
    this.router.navigate(["/"]);
  }
}
