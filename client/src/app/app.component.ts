import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WOWY';
  user:object = null;
  error: any;
  constructor(public auth:AuthService) {
    // this.user = this.auth.getUser();
    // this.auth.getLoginEventEmitter()
    //     .subscribe( user => this.user=user );

  }


  ngOnInit() {
    this.auth.isLoggedIn()
    .subscribe(
      (user =>
        { this.user = user
        console.log(this.user)
      }),
      (err => {
        this.error = err
        this.user = null;
      })
    )

  }

  logout() {
    this.auth.logout()
    .subscribe(user => this.user = null)
  }
}
