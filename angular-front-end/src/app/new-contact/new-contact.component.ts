import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.css"]
})
export class NewContactComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  constructor(private authService: AuthService) {}

  name: "";
  phone: "";
  email: "";
  type: "";
  userId: "";

  ngOnInit() {}

  addNewContact() {
    const newContact = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      type: this.type,
      userId: sessionStorage.getItem("user")
    };
    this.addEvent.emit(newContact);
    console.log("test");
  }
}
