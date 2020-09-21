import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class AuthService implements OnInit{
  user: firebase.User;
  returnUrl;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    afAuth.authState.subscribe(user => {
      console.log("User's login status: ", user);
      console.log("The current url is: ", localStorage.getItem('theReturnUrl'));
      this.user = user;
      let theReturnUrl = localStorage.getItem('theReturnUrl');
      router.navigate([theReturnUrl]);
      localStorage.setItem('theReturnUrl', '/');
    });
  }

  ngOnInit() { }



  login() {
    // var a = 'Cat' || 'Dog';  will return 'Cat'
    this.returnUrl = this.route.snapshot.queryParamMap.get('theReturnUrl') || '/';
    localStorage.setItem('theReturnUrl', this.returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }


  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }


}
