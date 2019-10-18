import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  contacts = [];

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
    return this.http.get<any[]>(`http://localhost:3000/contacts`);
    //return this.contacts;
  }

  getContactById(id) {
    return this.http.get<any[]>(`http://localhost:3000/contacts/${id}`);
  }

  deleteContact(id) {
    return this.http.delete(
      `http://localhost:3000/contacts/${id}`,
      this.httpOptions
    );
  }

  editContact(id, newContact) {
    return this.http.patch(
      `http://localhost:3000/contacts/${id}`,
      newContact,
      this.httpOptions
    );
  }
}
