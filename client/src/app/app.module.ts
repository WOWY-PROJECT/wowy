import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { ArticleService } from './services/article.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { routes } from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    CreateArticleComponent
  ],
  imports: [
    FileUploadModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, ArticleService, CreateArticleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
