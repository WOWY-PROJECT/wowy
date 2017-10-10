import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FoundArticlesComponent } from './found-articles/found-articles.component';
import { LostArticlesComponent } from './lost-articles/lost-articles.component';


import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserprofileComponent, canActivate: [IsLoggedInService] },
  { path: 'login', component: LoginformComponent, },
  { path: 'signup', component: SignupformComponent, },
  { path: 'article-details/:id', component: ArticleDetailsComponent },
  { path: 'article-list', component: ArticleListComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'newArticle', component: CreateArticleComponent },
  { path: 'found-articles', component: FoundArticlesComponent },
  { path: 'lost-articles', component: LostArticlesComponent },
  //{ path: '**', redirectTo: '' }
];
