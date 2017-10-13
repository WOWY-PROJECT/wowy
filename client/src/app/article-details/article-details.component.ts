import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { environment } from '../../environments/environment';

const BASE_URL = environment.BASE_URL;



@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

article;
  lat: Number
  lng: Number
  zoom:number = 17;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private articleService: ArticleService) { }

    ngOnInit() {
      console.log(this)
      this.route.params.subscribe(params => {
        this.getArticle(params['id'])
      });
    }

    getArticle(id) {
      this.articleService.get(id)
        .subscribe((article) => {
          console.log(article)
          this.article = article;
          this.lat = article.lat
          this.lng = article.lng
        });
    }

}
