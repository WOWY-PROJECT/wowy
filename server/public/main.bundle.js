webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand\" href=\"/\"><img src=\"https://imgur.com/a/CK6fx\" width=\"150px\" /></a> -->\n      <a class=\"navbar-brand\" href=\"#\">\n        <img alt=\"WOWY\" src=\"https://i.imgur.com/AnBbBFH.png\" width=\"35px\" />\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/signup']\">Signup</a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/article-list']\">Article List</a></li>\n        <li *ngIf=\"user\"><a [routerLink]=\"['/create-article']\">Create Article</a></li>\n        <button *ngIf=\"user\" (click)=\"logout()\">Logout</button>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'WOWY';
        this.user = null;
        // this.user = this.auth.getUser();
        // this.auth.getLoginEventEmitter()
        //     .subscribe( user => this.user=user );
        this.auth.isLoggedIn()
            .subscribe((function (user) { return _this.user = user; }), (function (err) {
            _this.error = err;
            _this.user = null;
        }));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe(function (user) { return _this.user = null; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__article_details_article_details_component__ = __webpack_require__("../../../../../src/app/article-details/article-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__article_list_article_list_component__ = __webpack_require__("../../../../../src/app/article-list/article-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__create_article_create_article_component__ = __webpack_require__("../../../../../src/app/create-article/create-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_14__article_details_article_details_component__["a" /* ArticleDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__article_list_article_list_component__["a" /* ArticleListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__create_article_create_article_component__["a" /* CreateArticleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_7__services_article_service__["a" /* ArticleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article-details/article-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-details/article-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Article details </h1>\n<a [routerLink]=\"['/article-list']\"> Back to list </a>\n\n<div *ngIf=\"article\">\n  <div class=\"article-thumbnail\">\n    <img height=\"300\" [src]=\"BASE_URL + article.image\" />\n  </div>\n  <button (click)=\"deleteArticle()\">Delete this article</button>\n  <div class=\"article-info\">\n    <h2> {{ article.name }}&nbsp;</h2>\n    <h3> {{ article.description }} </h3>\n\n    <!-- <div *ngIf=\"article.specs.length\">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor=\"let spec of article.specs\"> {{ spec&nbsp;}} </li>\n      </ul>\n    </div> -->\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/article-details/article-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
var ArticleDetailsComponent = (function () {
    function ArticleDetailsComponent(router, route, articleService) {
        this.router = router;
        this.route = route;
        this.articleService = articleService;
    }
    ArticleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("El parametro recibido es: " + params['id']);
            _this.getArticle(params['id']);
        });
    };
    ArticleDetailsComponent.prototype.getArticle = function (id) {
        var _this = this;
        this.articleService.get(id)
            .subscribe(function (article) {
            _this.article = article;
        });
    };
    return ArticleDetailsComponent;
}());
ArticleDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-details',
        template: __webpack_require__("../../../../../src/app/article-details/article-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-details/article-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_article_service__["a" /* ArticleService */]) === "function" && _c || Object])
], ArticleDetailsComponent);

var _a, _b, _c;
// deletePhone() {
//   if (window.confirm('Are you sure?')) {
//     this.phoneService.remove(this.phone._id)
//       .subscribe(() => {
//         this.router.navigate(['']);
//       });
//   }
// }
//# sourceMappingURL=article-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {background-color:#163a63; color:#163a63; padding-top:15px;}\n\n.list-group {box-shadow: 0px 11px 23px 5px rgba(0,0,0,0.34);}\n\n.list-group-item {background-color: rgba(255,255,255,0.7); border:0;}\n\n.btn-toolbar {margin-top:10px;}\n\nimg {\n  float:left;\n  margin-right:15px;\n  height: 128px;\n  width: 128px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ==== SOME BOOTSTRAP MODS/STYLING ==== */\n.btn-default {background-color: rgba(255,255,255,0.3); border-color:rgba(0,0,0,0.2);}\n.img-rounded, .btn, .label {border-radius: 6px;}\n.btn {padding: 6px 18px;}\n.dropdown-menu>li>a {color:#777;}\n.dropdown-menu {\n  background-color:rgba(0,0,0,0.8);\n  .divider {background-color: #555;}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1> Article list </h1>\n<div *ngIf=\"articles\">\n  <div *ngFor=\"let article of articles\" class=\"article\">\n    <img [src]=\"article.image\" height=100/>\n    <h3> {{ article.name }} </h3>\n    <p> {{ article.description }} </p>\n    <a [routerLink]=\"['/article-details', article._id]\"> View Details </a>\n  </div>\n</div> -->\n\n    <!-- <div class=\"container\">\n        <div *ngIf=\"articles\" class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1 class=\"page-header\">Articles list\n                </h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let article of articles\" class=\"col-md-3 portfolio-item\">\n                <a href=\"#\">\n                    <img class=\"img-responsive\" [src]=\"article.image\" height=100 alt=\"\">\n                </a>\n                <h3>\n                    <a [routerLink]=\"['/article-details', article._id]\">{{ article.name }}</a>\n                </h3>\n                <p>{{ article.description }}</p>\n                <button [routerLink]=\"['/article-details', article._id]\"> View Details </button>\n            </div>\n        </div>\n        <hr>\n    </div> -->\n\n\n\n    <div class=\"container\">\n      <ul class=\"list-group\">\n        <li *ngFor=\"let article of articles\" class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" [src]=\"'http://localhost:3000' + article.image\" height=100 alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            {{ article.name }}\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            {{ article.description }}\n            <br />\n            <a [routerLink]=\"['/article-details', article._id]\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$29.99</a>\n          </div>\n        </li>\n        <!-- <li class=\"list-group-item active clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Current thing\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-info\">$9.95</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Something great\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$42.50</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Another thing\n            <span class=\"label label-default pull-right\">SOLD OUT</span>\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn disabled btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn disabled btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn disabled btn-primary\">$1.99</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Yet another item\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$16.00</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Something else\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$12.99</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Last thing here\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-success\">Free!</a>\n          </div>\n        </li> -->\n      </ul>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/article-list/article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListComponent = (function () {
    function ArticleListComponent(articleService) {
        this.articleService = articleService;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getList()
            .map(function (e) { return _this.articles = e; })
            .subscribe();
    };
    return ArticleListComponent;
}());
ArticleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-article-list',
        template: __webpack_require__("../../../../../src/app/article-list/article-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/article-list/article-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], ArticleListComponent);

var _a;
//# sourceMappingURL=article-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-article/create-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-article/create-article.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1> Submit an article! </h1>\n<a [routerLink]=\"['']\"> Back to home </a> -->\n\n<!-- <select name=\"\" form=\"createarticle\">\n  <option value=\"lost\">Lost</option>\n  <option value=\"found\" selected>Found</option>\n</select>\n\n<form id=\"createarticle\">\n    <label> Name* </label>\n    <input type=\"text\" [(ngModel)]=\"newArticle.name\" name=\"name\" required />\n\n    <label> Description* </label>\n    <input type=\"text\" [(ngModel)]=\"newArticle.name\" name=\"description\" required />\n\n    <label> Localization* </label>\n    <input type=\"text\" [(ngModel)]=\"newArticle.localization\" name=\"localization\" required />\n\n    <label> Date* </label>\n    <input type=\"date\" [(ngModel)]=\"newArticle.date\" name=\"date\" required />\n\n    <label> Reward* </label>\n    <input type=\"number\" [(ngModel)]=\"newArticle.reward\" name=\"reward\" required />\n\n <input type=\"file\" name=\"file\"  id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  <button (click)=\"create()\"> Create Article </button>\n</form> -->\n\n\n<div class=\"container\">\n\n  <form class=\"well form-horizontal\"  method=\"post\" id=\"contact_form\">\n    <fieldset>\n\n      <!-- Form Name -->\n      <legend style=\"text-align: center;\">Submit an article!</legend>\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Name</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input [(ngModel)]=\"newArticle.name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Description</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n            <input [(ngModel)]=\"newArticle.description\" name=\"description\" placeholder=\"Description\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Text input-->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Localization</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-map-marker\"></i></span>\n            <input [(ngModel)]=\"newArticle.localization\" name=\"localization\" placeholder=\"Localization\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Date</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n            <input [(ngModel)]=\"newArticle.date\" name=\"date\" placeholder=\"Date\" class=\"form-control\" type=\"date\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Reward</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\n            <input [(ngModel)]=\"newArticle.reward\" name=\"reward\" placeholder=\"Reward\" class=\"form-control\" type=\"number\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Select Basic -->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Lost or found?</label>\n        <div class=\"col-md-4 selectContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n            <select name=\"\" form=\"contact_form\" class=\"form-control selectpicker\">\n      <option value=\" \" >Have you lost or found this item?</option>\n      <option>I have lost this item</option>\n      <option>I have found this item</option>\n    </select>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Upload image</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <input type=\"file\" name=\"file\" id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Button -->\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\"></label>\n        <div class=\"col-md-4\">\n          <button (click)=\"create()\" class=\"btn btn-warning\">Submit product <span class=\"glyphicon glyphicon-send\"></span></button>\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n<!-- /.container -->\n"

/***/ }),

/***/ "../../../../../src/app/create-article/create-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateArticleComponent = (function () {
    function CreateArticleComponent(router, articleService) {
        this.router = router;
        this.articleService = articleService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL + "/api"
        });
        this.newArticle = {
            name: '',
            description: '',
            date: '',
            localization: '',
            reward: null
        };
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onSuccessItem = function (item, response) {
            _this.router.navigate(['/']);
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
        };
    };
    CreateArticleComponent.prototype.create = function () {
        var _this = this;
        this.articleService.createArticle(this.newArticle);
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newArticle.name);
            form.append('description', _this.newArticle.description);
            form.append('date', _this.newArticle.date);
            form.append('localization', _this.newArticle.localization);
            form.append('reward', _this.newArticle.reward);
        };
        this.uploader.uploadAll();
    };
    return CreateArticleComponent;
}());
CreateArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-article',
        template: __webpack_require__("../../../../../src/app/create-article/create-article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-article/create-article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */]) === "function" && _b || Object])
], CreateArticleComponent);

var _a, _b;
//# sourceMappingURL=create-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div style=\"text-align:center\">\n  <h1>{{title}}</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n\tbackground: #eee !important;\n}\n\n.wrapper {\n\tmargin-top: 80px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0,0,0,0.1);\n\n  .form-signin-heading,\n\t.checkbox {\n\t  margin-bottom: 30px;\n\t}\n\n\t.checkbox {\n\t  font-weight: normal;\n\t}\n\n\t.form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\n\tinput[type=\"text\"] {\n\t  margin-bottom: -1px;\n\t  border-bottom-left-radius: 0;\n\t  border-bottom-right-radius: 0;\n\t}\n\n\tinput[type=\"password\"] {\n\t  margin-bottom: 20px;\n\t  border-top-left-radius: 0;\n\t  border-top-right-radius: 0;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form >\n  <h2> Login </h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n  <button (click)=\"login()\"> login </button>\n</form> -->\n\n\n<!-- <div class=\"wrapper\">\n    <form class=\"form-signin\">\n      <h2 class=\"form-signin-heading\">Please login</h2>\n      <input type=\"text\" [(ngModel)]=\"formInfo.username\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required=\"\" autofocus=\"\" />\n      <input type=\"password\" [(ngModel)]=\"formInfo.password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\"/> -->\n      <!-- <label class=\"checkbox\">\n        <input type=\"checkbox\" value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\"> Remember me\n      </label> -->\n      <!-- <br />\n      <button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n    </form>\n  </div> -->\n\n\n  <div class=\"container\">\n\n      <form class=\"well form-horizontal\" method=\"post\"  id=\"contact_form\">\n  <fieldset>\n\n  <!-- Form Name -->\n  <legend style=\"text-align: center;\">Login</legend>\n\n  <!-- Text input-->\n\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\">Username</label>\n    <div class=\"col-md-4 inputGroupContainer\">\n    <div class=\"input-group\">\n    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n    <input [(ngModel)]=\"formInfo.username\" name=\"username\" placeholder=\"Username\" class=\"form-control\"  type=\"text\">\n      </div>\n    </div>\n  </div>\n\n  <!-- Text input-->\n\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\" >Password</label>\n      <div class=\"col-md-4 inputGroupContainer\">\n      <div class=\"input-group\">\n    <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-check\"></i></span>\n    <input [(ngModel)]=\"formInfo.password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"  type=\"text\">\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Button -->\n  <div class=\"form-group\">\n    <label class=\"col-md-4 control-label\"></label>\n    <div class=\"col-md-4\">\n      <button (click)=\"login()\" class=\"btn btn-warning\" >Login <span class=\"glyphicon glyphicon-send\"></span></button>\n    </div>\n  </div>\n\n  </fieldset>\n  </form>\n      </div><!-- /.container -->\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function () { return _this.router.navigate(['/']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginformComponent);

var _a, _b, _c;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_details_article_details_component__ = __webpack_require__("../../../../../src/app/article-details/article-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_list_article_list_component__ = __webpack_require__("../../../../../src/app/article-list/article-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_article_create_article_component__ = __webpack_require__("../../../../../src/app/create-article/create-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'article-details/:id', component: __WEBPACK_IMPORTED_MODULE_4__article_details_article_details_component__["a" /* ArticleDetailsComponent */] },
    { path: 'article-list', component: __WEBPACK_IMPORTED_MODULE_5__article_list_article_list_component__["a" /* ArticleListComponent */] },
    { path: 'create-article', component: __WEBPACK_IMPORTED_MODULE_6__create_article_create_article_component__["a" /* CreateArticleComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        // BASE_URL: string = 'http://localhost:3000';
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
        this.options = { withCredentials: true };
    }
    ArticleService.prototype.getList = function () {
        return this.http.get(this.BASE_URL + "/api/articles", this.options)
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.get = function (id) {
        return this.http.get(this.BASE_URL + "/api/articles/" + id)
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.createArticle = function (newArticle) {
        return this.http.post(this.BASE_URL + "/api", newArticle, this.options)
            .map(function (res) { return res.json(); });
    };
    return ArticleService;
}());
ArticleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArticleService);

var _a;
//# sourceMappingURL=article.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        console.log(BASEURL);
        // this.isLoggedIn().subscribe()
    }
    // public getLoginEventEmitter():EventEmitter<any>{
    //   return this.userLoginEvent
    // }
    //
    // public getUser(){
    //   return this.user
    // }
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().error);
    };
    AuthService.prototype.signup = function (username, password, email, phone) {
        var _this = this;
        console.log("entrooo");
        console.log(BASEURL + "/signup");
        return this.http.post(BASEURL + "/signup", { username: username, password: password, email: email, phone: phone }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        return this.auth.isLoggedIn().map(function (user) { return true; });
        // return this.auth.getUser() ? true : false
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form >\n  <h2> Signup </h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n  <br>\n  <label> Email </label>\n  <input type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\"/>\n  <br>\n  <label> Phone </label>\n  <input type=\"tel\" [(ngModel)]=\"formInfo.phone\" name=\"phone\"/>\n\n  <button (click)=\"signup()\"> signup </button>\n</form> -->\n\n\n<div class=\"container\">\n\n    <form class=\"well form-horizontal\" action=\" \" method=\"post\"  id=\"contact_form\">\n<fieldset>\n\n<!-- Form Name -->\n<legend style=\"text-align: center;\">Signup</legend>\n\n<!-- Text input-->\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\">Username</label>\n  <div class=\"col-md-4 inputGroupContainer\">\n  <div class=\"input-group\">\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n  <input [(ngModel)]=\"formInfo.username\" name=\"username\" placeholder=\"Username\" class=\"form-control\"  type=\"text\">\n    </div>\n  </div>\n</div>\n\n<!-- Text input-->\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" >Password</label>\n    <div class=\"col-md-4 inputGroupContainer\">\n    <div class=\"input-group\">\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-check\"></i></span>\n  <input [(ngModel)]=\"formInfo.password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"  type=\"text\">\n    </div>\n  </div>\n</div>\n\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" >Email</label>\n    <div class=\"col-md-4 inputGroupContainer\">\n    <div class=\"input-group\">\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n  <input [(ngModel)]=\"formInfo.email\" name=\"email\" placeholder=\"Email\" class=\"form-control\"  type=\"text\">\n    </div>\n  </div>\n</div>\n\n\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\" >Phone</label>\n    <div class=\"col-md-4 inputGroupContainer\">\n    <div class=\"input-group\">\n  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-phone\"></i></span>\n  <input [(ngModel)]=\"formInfo.phone\" name=\"phone\" placeholder=\"Phone\" class=\"form-control\"  type=\"text\">\n    </div>\n  </div>\n</div>\n\n<!-- Button -->\n<div class=\"form-group\">\n  <label class=\"col-md-4 control-label\"></label>\n  <div class=\"col-md-4\">\n    <button (click)=\"signup()\" class=\"btn btn-warning\" >Signup <span class=\"glyphicon glyphicon-send\"></span></button>\n  </div>\n</div>\n\n</fieldset>\n</form>\n    </div><!-- /.container -->\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupformComponent = (function () {
    function SignupformComponent(auth) {
        this.auth = auth;
        this.formInfo = {
            username: "",
            password: "",
            email: "",
            phone: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _a = this.formInfo, username = _a.username, password = _a.password, email = _a.email, phone = _a.phone;
        if (username != "" && password != "" && email != "" && phone != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password, email, phone)
                .map(function (user) { return console.log(user); })
                .subscribe();
        }
        else {
            console.log("You must set a username, password, email and phone");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignupformComponent);

var _a;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n\n<div *ngIf=\"user\">\n  <h2> You are now logged in as {{ user.username }}!! </h2>\n  <p> Here's the user object </p>\n  <pre> {{ user | json }} </pre>\n\n  <button (click)=\"auth.logout().subscribe()\"> logout </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = (function () {
    function UserprofileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.auth.isLoggedIn()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserprofileComponent);

var _a;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASE_URL: 'http://localhost:3000'
};
// export const environment = {
//   production: true,
//   BASE_URL: ''
// };
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map