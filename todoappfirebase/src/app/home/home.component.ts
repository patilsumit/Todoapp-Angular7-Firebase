import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../app/authservice.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:firebase.User

  constructor(private _authserviceService:AuthserviceService,private navigate:Router ) { 
  }


  myLogin()
  {
    this._authserviceService.myAuthLogin();
   
  }
  useremail:string;
  getUser (){
    this._authserviceService.getUser().subscribe( response => {
      this.user = response;
      console.log(response);
      });
  }
  
  myLogout()
  {
    this._authserviceService.myLogOut();
        this.navigate.navigate(['/']);
    this.getUser();
  }
  ngOnInit() {
    this.getUser();
  }

}
