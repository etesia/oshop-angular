import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';



@Injectable()
export class AuthService {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    let returnUrl = this.route.snapshot.queryParamMap.get('theReturnUrl');
    // console.log('returnUrl:', returnUrl);
    // console.log('snap:', this.route.snapshot);
  }

  logOut() {
    this.afAuth.auth.signOut();
    let returnUrl = this.route.snapshot.queryParamMap.get('theReturnUrl');
    // console.log('returnUrl:', returnUrl);
    // console.log('snap:', this.route.snapshot);
  }


}
