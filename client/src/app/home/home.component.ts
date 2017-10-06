import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'WOWY';
  user:object = null;
  error: any;
  constructor(public auth:AuthService) {
    // this.user = this.auth.getUser();
    // this.auth.getLoginEventEmitter()
    //     .subscribe( user => this.user=user );
    this.auth.isLoggedIn()
    .subscribe(
      (user => this.user = user),
      (err => {
        this.error = err
        this.user = null;
      })
    )
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout()
    .subscribe(user => this.user = null)
  }
}
