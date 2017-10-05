import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:"",
  email:"",
  phone:""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup(){
    const {username, password, email, phone} = this.formInfo;
    if(username != "" && password != "" && email != "" && phone != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password, email, phone)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username, password, email and phone");
    }
  }

}
