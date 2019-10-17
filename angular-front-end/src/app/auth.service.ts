import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Observable } from "rxjs";
@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log("Success!", value);
        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.log("Something went wrong:", err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("Nice, it worked!");
        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.log("Something went wrong:", err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut().then(() => {
      this.router.navigate(["login"]);
    });
  }

  isLoggedIn() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  getUserId() {
    var user = firebase.auth().currentUser;
    return user.uid;
  }
}
