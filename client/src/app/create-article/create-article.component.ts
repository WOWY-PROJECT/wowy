import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/api/articles/`
  });

  newArticle = {
    name: '',
    description: '',
    date: '',
    localization: '',
    reward: null
  };

  constructor(public router:Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.router.navigate(['/']);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
    };
  }

  create(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newArticle.name);
      form.append('description', this.newArticle.description);
      form.append('date', this.newArticle.date);
      form.append('localization', this.newArticle.localization);
      form.append('reward', this.newArticle.reward);
    };

   this.uploader.uploadAll();
  }

}
