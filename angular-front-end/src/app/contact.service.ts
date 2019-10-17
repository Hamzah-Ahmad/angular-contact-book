import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  contacts = [
    {
      name: "John Boi",
      phone: "000-000-000",
      email: "theBoi@email.com",
      type: "Business"
    },
    {
      name: "Kid Pepe",
      phone: "001-001-001",
      email: "itsPepe@email.com",
      type: "Personal"
    }
  ];

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  addContact(newContact) {
    return this.http.post<Object>(
      "http://localhost:3000/contacts",
      newContact,
      this.httpOptions
    );
  }
  getContacts() {
    return this.http.get<Object[]>("http://localhost:3000/contacts");
    //return this.contacts;
  }

  deleteContact(id) {
    return this.http.delete(
      `http://localhost:3000/contacts/${id}`,
      this.httpOptions
    );
  }
}
