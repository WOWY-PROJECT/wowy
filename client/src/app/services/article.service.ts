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
    return this.http.get(`${this.BASE_URL}/api/articles/${id}`, this.options)
      .map((res) => res.json());
  }

  createArticle(newArticle) {
    console.log("NEW ARTICLE", newArticle)
    console.log(`${this.BASE_URL}`);
    return this.http.post(`${this.BASE_URL}/api/newArticle`, newArticle, this.options)
      .map((res) => res.json());
  }

  getGeoData(address){
    // Aquí va la URL de la API de Google Maps
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+address);
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
