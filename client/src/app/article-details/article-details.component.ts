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
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private articleService: ArticleService) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(`El parametro recibido es: ${params['id']}`);
        this.getArticle(params['id'])
      });
    }

    getArticle(id) {
      this.articleService.get(id)
        .subscribe((article) => {
          this.article = article;
        });
    }

}


  // deletePhone() {
  //   if (window.confirm('Are you sure?')) {
  //     this.phoneService.remove(this.phone._id)
  //       .subscribe(() => {
  //         this.router.navigate(['']);
  //       });
  //   }
  // }
