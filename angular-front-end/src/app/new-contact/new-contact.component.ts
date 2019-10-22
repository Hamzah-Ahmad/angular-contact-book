import { Component, OnInit, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.css"]
})
export class NewContactComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  constructor() {}

  name: "";
  phone: "";
  email: "";
  type: "";
  userId;

  ngOnInit() {}

  addNewContact() {
    const newContact = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      type: this.type,
      //userId: "cUhh05utFqg1WsiaCjuDIaD3zGx2"
      userId: JSON.parse(localStorage.getItem("user"))
    };
    this.addEvent.emit(newContact);
  }
}
