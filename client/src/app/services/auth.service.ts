import { Injectable, EventEmitter } from '@angular/core'
import {Observable} from 'rxjs/Observable'
import { Http } from '@angular/http'
import 'rxjs'
import { environment } from '../../environments/environment'

const BASEURL = environment.BASE_URL + "/auth"


@Injectable()
export class AuthService {

  private user:object
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>()
  private options = {withCredentials:true}

  constructor(private http: Http) {
    console.log(BASEURL);
    // this.isLoggedIn().subscribe()
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent
    }

    public getUser(){
      return this.user
    }

    private emitUserLoginEvent(user){
      this.user = user
      this.userLoginEvent.emit(user)
      return user
    }

    private handleError(e) {
      return Observable.throw(e.json().error);
    }

    signup(username,password, email, phone) {
      console.log("entrooo");
      console.log(`${BASEURL}/signup`);
      return this.http.post(`${BASEURL}/signup`, {username,password, email, phone}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError)
    }

    login(username,password) {
      return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError)
    }

    logout() {
      return this.http.get(`${BASEURL}/logout`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(null))
        .catch(this.handleError)
    }

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`, this.options)
        .map(res => res.json())
        .catch(this.handleError)
    }
}
