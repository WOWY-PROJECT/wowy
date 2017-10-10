import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lost-articles',
  templateUrl: './lost-articles.component.html',
  styleUrls: ['./lost-articles.component.css']
})
export class LostArticlesComponent implements OnInit {

  articles;
  articlesFound: Array<string> = [];
  articlesLost: Array<string> = [];

  constructor(public articleService:ArticleService) { }

    ngOnInit() {
      this.articleService.getList()
      .subscribe(art => {
        this.articles = art;
        art.forEach(a => {
          if(a.status === "lost")
            this.articlesLost.push(a);
          else
            this.articlesFound.push(a);
        })
        console.log(this.articlesFound, this.articlesLost);
      });

    }
  }
