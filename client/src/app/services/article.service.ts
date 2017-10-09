import { Injectable,EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';


@Injectable()
export class ArticleService {
  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL = environment.BASE_URL;
  private options = { withCredentials: true};
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/articles`, this.options)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/articles/${id}`)
      .map((res) => res.json());
  }

  createArticle(newArticle) {
    return this.http.post(`${this.BASE_URL}/api`, newArticle, this.options)
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
