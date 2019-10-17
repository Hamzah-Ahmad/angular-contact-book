import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.css"]
})
export class NewContactComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  name: "";
  phone: "";
  email: "";
  type: "";

  addNewContact() {
    const newContact = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      type: this.type
    };
    this.addEvent.emit(newContact);
  }
  constructor() {}

  ngOnInit() {}
}
