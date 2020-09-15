import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user: firebase.User;

  constructor(private adAuth: AngularFireAuth) {
    adAuth.authState.subscribe(user => this.user = user);

  }

  logOut() {
    this.adAuth.auth.signOut();
    console.log("User is logout", this.user);
  }
}
