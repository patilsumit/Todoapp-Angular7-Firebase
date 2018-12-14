import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
   user: firebase.User; 
  constructor(private _angularFireAuth:AngularFireAuth) { }     

  myAuthLogin()
  {
     this._angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
     
  }

  getUser () {
    return this._angularFireAuth.authState;
  }

  myLogOut()
  {
    this._angularFireAuth.auth.signOut();
  }
}
