import { Injectable,EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable()
export class ArticleService {
  // BASE_URL: string = 'http://localhost:3000';
  private options = { withCredentials: true};
  constructor(private http: Http) {}

  getList() {
    console.log("entro");
    return this.http.get(`${this.BASE_URL}/api/articles`, this.options)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/articles/${id}`)
      .map((res) => res.json());
  }

  createArticle(newArticle) {
    console.log("entro en funcion")
    return this.http.post(`${this.BASE_URL}/api`, this.options)
      .map((res) => res.json());
  }

  // edit(article) {
  //   return this.http.put(`${this.BASE_URL}/api/articles/${article.id}`, article)
  //     .map((res) => res.json());
  // }
  //
  // remove(id) {
  //   return this.http.delete(`${this.BASE_URL}/api/articles/${id}`)
  //     .map((res) => res.json());
  // }

}
