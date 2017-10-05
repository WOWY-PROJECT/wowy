import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth:AuthService,
              private router:Router,
              private route:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe(()=>this.router.navigate(['/']));

    } else{
      console.log("You must set a username and a password");
    }
  }

}
