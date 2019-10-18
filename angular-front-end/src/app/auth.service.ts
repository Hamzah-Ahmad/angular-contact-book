import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { Observable } from "rxjs";
import { first } from "rxjs/operators";
@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userId;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userId = user.uid;
        localStorage.setItem("user", user.uid);
      } else {
        this.userId = null;
        localStorage.removeItem("user");
      }
    });
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
      localStorage.removeItem("user");
    });
  }

  isLoggedIn() {
    return this.firebaseAuth.authState.pipe(first()).toPromise();
  }
}
