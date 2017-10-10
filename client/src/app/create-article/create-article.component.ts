import { Component, OnInit } from '@angular/core';
import { FileUploader} from "ng2-file-upload";
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/api/newArticle`
  });

  newArticle = {
    name: '',
    description: '',
    date: '',
    lat: '',
    lng: '',
    street: '',
    city: '',
    country: '',
    // localization: '',
    reward: null,
    status: ''
  };

  lat:number = 40.3925362;
  lng:number = -3.7004556;
  constructor(public router:Router, public articleService:ArticleService) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.router.navigate(['/']);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
    };
  }

  create(){
    console.log("FUNCION CREATE")
    let address = this.newArticle.street + ',' + this.newArticle.city + ',' + this.newArticle.country;
    this.articleService.getGeoData(address)
      .subscribe((result) => {
        this.newArticle.lat = result.json().results[0].geometry.location.lat;
        this.newArticle.lng = result.json().results[0].geometry.location.lng;
        this.articleService.createArticle(this.newArticle)
        this.uploader.onBuildItemForm = (item, form) => {
          form.append('name', this.newArticle.name);
          form.append('description', this.newArticle.description);
          form.append('date', this.newArticle.date);
          form.append('lat', this.newArticle.lat);
          form.append('lng', this.newArticle.lng);
          // form.append('street', this.newArticle.street);
          // form.append('city', this.newArticle.city);
          // form.append('country', this.newArticle.country);
          // form.append('localization', this.newArticle.localization);
          form.append('reward', this.newArticle.reward);
          form.append('status', this.newArticle.status);
        };

       this.uploader.uploadAll();
      })
  }

}
