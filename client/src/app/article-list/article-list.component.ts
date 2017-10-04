import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles;
  constructor(public articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.getList()
    .map(e => this.articles = e)
    .subscribe();
  }

}
