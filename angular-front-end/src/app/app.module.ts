import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { NewContactComponent } from "./new-contact/new-contact.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";

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
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ContactComponent,
        canActivate: [AuthGuardService]
      },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
