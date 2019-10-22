import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppRoutingModule } from "./app-routing.module";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { NewContactComponent } from "./new-contact/new-contact.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";
import { AuthGuardService } from "./auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export var firebaseConfig = {
  apiKey: "AIzaSyAb5Z3I3RCoRv4ymqd0UYCzGZjvqcY5blc",
  authDomain: "angular-contacts-a64f3.firebaseapp.com",
  databaseURL: "https://angular-contacts-a64f3.firebaseio.com",
  projectId: "angular-contacts-a64f3",
  storageBucket: "angular-contacts-a64f3.appspot.com",
  messagingSenderId: "889277044775",
  appId: "1:889277044775:web:dbba0ba7deb9834dcd9602"
};

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewContactComponent,
    EditContactComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ContactComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      { path: "edit/:id", component: EditContactComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
