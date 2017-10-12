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
exports.push([module.i, "* {\n  font-family: Acme;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/\"><img src=\"https://imgur.com/a/CK6fx\" width=\"150px\" /></a>\n      <a class=\"navbar-brand\" href=\"#\">\n        <img alt=\"WOWY\" src=\"https://i.imgur.com/AnBbBFH.png\" width=\"35px\" />\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/signup']\">Signup</a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/article-list']\">Article List</a></li>\n        <li ><a [routerLink]=\"['/create-article']\">Create Article</a></li>\n        <button *ngIf=\"user\" (click)=\"logout()\">Logout</button>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n  <router-outlet></router-outlet>\n"

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
        // this.user = this.auth.getUser();
        // this.auth.getLoginEventEmitter()
        //     .subscribe( user => this.user=user );
        this.auth = auth;
        this.title = 'WOWY';
        this.user = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn()
            .subscribe((function (user) {
            _this.user = user;
            console.log(_this.user);
        }), (function (err) {
            _this.error = err;
            _this.user = null;
        }));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lost_articles_lost_articles_component__ = __webpack_require__("../../../../../src/app/lost-articles/lost-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__found_articles_found_articles_component__ = __webpack_require__("../../../../../src/app/found-articles/found-articles.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_16__create_article_create_article_component__["a" /* CreateArticleComponent */],
            __WEBPACK_IMPORTED_MODULE_19__lost_articles_lost_articles_component__["a" /* LostArticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_20__found_articles_found_articles_component__["a" /* FoundArticlesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_18__agm_core__["a" /* AgmCoreModule */].forRoot({
                // apiKey: 'AIzaSyB-DfsZKYeYeWSaycvNrkVe-x_lseyD8i8'
                //apiKey: 'AIzaSyD6AD8ltoPLTqS8ahgnWXfwkK9JLiYcdTw'
                apiKey: 'AIzaSyCIr1VifCeR1UccrMG4YZEKsIp5Yk09VJU'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_7__services_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_16__create_article_create_article_component__["a" /* CreateArticleComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/article-details/article-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);", ""]);

// module
exports.push([module.i, "agm-map {\n  height: 400px;\n  width: 100%;\n}\n\n.fixedwidth {\n  height: 500px;\n  background-color: #f8f8f8;\n  /*background-image: url(http://p1.pichost.me/i/11/1344899.jpg);\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;*/\n}\n\n.jumbotron {\n\tmargin: 40px;\n\tbox-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);\n}\n\n.jumbotron .well {\n\tbox-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);\n}\n\n.jumbotron h1 {\n\tfont-size: 3em;\n\tmargin: 0;\n}\n\n.list-group-item {\n\tfont-size: 1.2em;\n\tpadding-right: 30%;\n\tmargin-top: 5px;\n\tborder-radius: 4px;\n}\n\n.input-group {\n\tmargin-top: 30%;\n}\n\n.done {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tpadding: 1px;\n\theight: 50%;\n\twidth: 20%;\n\tborder-radius: 0;\n\tborder-top-right-radius: 4px;\n}\n\n.delete {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tpadding: 1px;\n\theight: 50%;\n\twidth: 20%;\n\tborder-radius: 0;\n\tborder-bottom-right-radius: 4px;\n}\n\n\n/* Media Queries */\n\n@media (max-width: 600px) {\n\t.jumbotron {\n\t\tmargin: 30px 20px;\n\t}\n\t.jumbotron h1 {\n\t\tfont-size: 2.6em;\n\t}\n\t.jumbotron h5 {\n\t\tfont-size: 0.8em;\n\t}\n}\n\n\n\n\n\n\n\n\n.pulse:hover,\n.pulse:focus {\n  -webkit-animation: pulse 1s;\n          animation: pulse 1s;\n  box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 var(--hover);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 var(--hover);\n  }\n}\n\n.pulse {\n  --color: #6973a5;\n  --hover: #dfc4be;\n  font-size: 20px;\n}\n\nbutton {\n  color: var(--color);\n  transition: 0.25s;\n}\nbutton:hover, button:focus {\n  border-color: var(--hover);\n  color: #525252;\n}\n\nbody {\n  color: #fff;\n  background: #17181c;\n  font: 300 1em 'Fira Sans', sans-serif;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nbutton {\n  background: none;\n  border: 2px solid;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n}\n\nh1 {\n  font-weight: 400;\n}\n\ncode {\n  color: #e4cb58;\n  font: inherit;\n}\n\n\n/*@media (max-width: 320px) {\n  .jumbotron h1 {\n    font-size: 2em;\n  }\n  .jumbotron h5 {\n    font-size: 0.6em;\n  }\n  .list-group-item {\n    font-size: 0.8em;\n  }\n  .delete {\n    font-size: 0.8em;\n  }\n}*/\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: #5C7FB8;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.movie-card {\n  color: #A9A8A3;\n  padding: 40px 0;\n}\n\n.container {\n  margin: 0 auto;\n  /*width: 780px;*/\n  height: 640px;\n  background: #F0F0ED;\n  border-radius: 5px;\n  position: relative;\n}\n\n.hero {\n  height: 342px;\n  margin: 0;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.hero:before {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  background: red;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_bg.jpg\");\n  z-index: -1;\n  -webkit-transform: skewY(-2.2deg);\n          transform: skewY(-2.2deg);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-backface-visibility: hidden;\n}\n\n.cover {\n  position: absolute;\n  top: 160px;\n  left: 40px;\n  z-index: 2;\n}\n\n.details {\n  padding: 190px 0 0 280px;\n}\n.details .title1 {\n  color: white;\n  font-size: 44px;\n  margin-bottom: 13px;\n  position: relative;\n}\n.details .title1 span {\n  position: absolute;\n  top: 3px;\n  margin-left: 12px;\n  background: #C4AF3D;\n  border-radius: 5px;\n  color: #544C21;\n  font-size: 14px;\n  padding: 0px 4px;\n}\n.details .title2 {\n  color: #C7C1BA;\n  font-size: 23px;\n  font-weight: 300;\n  margin-bottom: 15px;\n}\n.details .likes {\n  margin-left: 24px;\n}\n.details .likes:before {\n  content: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png\");\n  position: relative;\n  top: 2px;\n  padding-right: 7px;\n}\n\n.description {\n  bottom: 0px;\n  height: 200px;\n  font-size: 16px;\n  line-height: 26px;\n  color: #B1B0AC;\n}\n\n.column1 {\n  padding-left: 50px;\n  padding-top: 120px;\n  width: 220px;\n  float: left;\n  text-align: center;\n}\n\n.tag {\n  background: white;\n  border-radius: 10px;\n  padding: 3px 8px;\n  font-size: 14px;\n  margin-right: 4px;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.tag:hover {\n  background: #ddd;\n}\n\n.column2 {\n  padding-left: 41px;\n  padding-top: 30px;\n  margin-left: 20px;\n  width: 480px;\n  float: left;\n}\n\n.avatars {\n  margin-top: 23px;\n}\n.avatars img {\n  cursor: pointer;\n}\n.avatars img:hover {\n  opacity: 0.6;\n}\n.avatars a:hover {\n  text-decoration: none;\n}\n\nfieldset, label {\n  margin: 0;\n  padding: 0;\n}\n\n/****** Style Star Rating Widget *****/\n.rating {\n  border: none;\n  float: left;\n}\n\n.rating > input {\n  display: none;\n}\n\n.rating > label:before {\n  margin: 5px;\n  margin-top: 0;\n  font-size: 1em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\F005\";\n}\n\n.rating > .half:before {\n  content: \"\\F089\";\n  position: absolute;\n}\n\n.rating > label {\n  color: #ddd;\n  float: right;\n}\n\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #FFD700;\n}\n\n/* hover previous stars in list */\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #FFED85;\n}\n\na[data-tooltip] {\n  position: relative;\n}\n\na[data-tooltip]::before,\na[data-tooltip]::after {\n  position: absolute;\n  display: none;\n  opacity: 0.85;\n}\n\na[data-tooltip]::before {\n  /*\n   * using data-tooltip instead of title so we\n   * don't have the real tooltip overlapping\n   */\n  content: attr(data-tooltip);\n  background: #000;\n  color: #fff;\n  font-size: 13px;\n  padding: 5px;\n  border-radius: 5px;\n  /* we don't want the text to wrap */\n  white-space: nowrap;\n  text-decoration: none;\n}\n\na[data-tooltip]::after {\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  content: '';\n}\n\na[data-tooltip]:hover::before,\na[data-tooltip]:hover::after {\n  display: block;\n}\n\n/** positioning **/\n/* top tooltip */\na[data-tooltip][data-placement=\"top\"]::before {\n  bottom: 100%;\n  left: 0;\n  margin-bottom: 40px;\n}\n\na[data-tooltip][data-placement=\"top\"]::after {\n  border-top-color: #000;\n  border-bottom: none;\n  bottom: 50px;\n  left: 20px;\n  margin-bottom: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/article-details/article-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=article>\n\n\n\n\n\t<div class=\"movie-card\">\n\n\t  <div class=\"container\">\n\n\t    <a href=\"#\"><img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg\" alt=\"cover\" class=\"cover\" /></a>\n\n\t    <div class=\"hero\">\n\n\t      <div class=\"details\">\n\n\t        <div class=\"title1\">The Hobbit <span>PG-13</span></div>\n\n\t        <div class=\"title2\">The Battle of the Five Armies</div>\n\n\t        <fieldset class=\"rating\">\n\t    <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n\t    <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\n\t    <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" checked /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n\t    <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3 and a half\" /><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\n\t    <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n\t    <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2 and a half\" /><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\n\t    <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n\t    <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1 and a half\" /><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\n\t    <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n\t    <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"half\" /><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\n\t  </fieldset>\n\n\t        <span class=\"likes\">109 likes</span>\n\n\t      </div> <!-- end details -->\n\n\t    </div> <!-- end hero -->\n\n\t    <div class=\"description\">\n\n\t      <div class=\"column1\">\n\t        <span class=\"tag\">action</span>\n\t        <span class=\"tag\">fantasy</span>\n\t        <span class=\"tag\">adventure</span>\n\t      </div> <!-- end column1 -->\n\n\t      <div class=\"column2\">\n\n\t        <p>Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through... <a href=\"#\">read more</a></p>\n\n\t        <div class=\"avatars\">\n\t          <a href=\"#\" data-tooltip=\"Person 1\" data-placement=\"top\">\n\t            <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png\" alt=\"avatar1\" />\n\t          </a>\n\n\t          <a href=\"#\" data-tooltip=\"Person 2\" data-placement=\"top\">\n\t            <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png\" alt=\"avatar2\" />\n\t          </a>\n\n\n\t          <a href=\"#\" data-tooltip=\"Person 3\" data-placement=\"top\">\n\t            <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png\" alt=\"avatar3\" />\n\t          </a>\n\n\t        </div> <!-- end avatars -->\n\n\n\n\t      </div> <!-- end column2 -->\n\t    </div> <!-- end description -->\n\n\n\t  </div> <!-- end container -->\n\t</div> <!-- end movie-card -->\n\n\n\n\n<!-- <div class=\"container\">\n\t\t<div class=\"text-center\">\n\t\t\t<div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2\">\n\t\t\t\t<h1>Information about the article</h1>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<br /><br />\n\n\n\t<div class=\"container\">\n\t\t<div class=\"text-center\">\n\n\t\t\t<div class=\"well fixedwidth\">\n\t\t\t<div class=\"col-xs-6 col-sm-6\">\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<h1>{{ article.name }}</h1>\n\t\t\t\t<h5>{{ article.description }}</h5>\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t  <button class=\"pulse\">WOWY!</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-6\">\n\t\t\t\t<img height=\"450px\" [src]=\"article.image\" />\n\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\t<div class=\"well fixedwidth\">\n\t\t\t\t<div class=\"well col-xs-12 col-md-12\">\n\t\t\t\t\t<agm-map [latitude]=article.lat [longitude]=\"article.lng\">\n\t\t\t\t\t<agm-marker [latitude]=\"article.lat\" [longitude]=\"article.lng\"></agm-marker>\n\t\t\t\t\t</agm-map>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t</div>\n\t</div> -->\n\n</div>\n\n<!-- <h1> Article details </h1>\n<a [routerLink]=\"['/article-list']\"> Back to list </a>\n\n<div *ngIf=\"article\">\n  <div class=\"article-thumbnail\">\n    <img height=\"300\" [src]=\"article.image\" />\n  </div>\n\n  <div class=\"article-info\">\n    <h2> {{ article.name }}&nbsp;</h2>\n    <h3> {{ article.description }} </h3>\n    <h3> {{ article.reward }} </h3>\n\n\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-3 col-md-3\">\n          </div>\n          <div class=\"col-xs-5 col-md-5\">\n            <agm-map [latitude]=\"article.lat\" [longitude]=\"article.lng\">\n            <agm-marker [latitude]=\"article.lat\" [longitude]=\"article.lng\"></agm-marker>\n            </agm-map>\n          </div>\n          <div class=\"col-xs-4 col-md-4\">\n          </div>\n        </div>\n      </div> -->\n\n    <!-- <div *ngIf=\"article.specs.length\">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor=\"let spec of article.specs\"> {{ spec&nbsp;}} </li>\n      </ul>\n    </div> -->\n\n  <!-- </div>\n</div> -->\n"

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
            _this.getArticle(params['id']);
        });
    };
    ArticleDetailsComponent.prototype.getArticle = function (id) {
        var _this = this;
        this.articleService.get(id)
            .subscribe(function (article) {
            _this.article = article;
            _this.lat = article.lat;
            _this.lng = article.lng;
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

module.exports = "\n    <div class=\"container\">\n      <ul class=\"list-group\">\n        <li *ngFor=\"let article of articles\" class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" [src]=\"'http://wowy-project.herokuapp.com' + article.image\" height=100 alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            {{ article.name }}\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            {{ article.description }}\n            <br />\n            <a [routerLink]=\"['/article-details', article._id]\"><small>Details&#8230;</small></a>\n          </p>\n\n\n\n          <!-- Button trigger modal -->\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">\n            Launch demo modal\n          </button>\n\n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                  <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n                </div>\n                <div class=\"modal-body\">\n                  ...\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$29.99</a>\n          </div>\n        </li>\n        <!-- <li class=\"list-group-item active clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Current thing\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-info\">$9.95</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Something great\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$42.50</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Another thing\n            <span class=\"label label-default pull-right\">SOLD OUT</span>\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn disabled btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn disabled btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn disabled btn-primary\">$1.99</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Yet another item\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$16.00</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Something else\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-primary\">$12.99</a>\n          </div>\n        </li>\n        <li class=\"list-group-item clearfix\">\n          <img class=\"img-responsive img-rounded\" src=\"http://placehold.it/256/163a63\" alt=\"\"/>\n          <h3 class=\"list-group-item-heading\">\n            Last thing here\n          </h3>\n          <p class=\"list-group-item-text lead\">\n            Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.\n            <br />\n            <a href=\"#\"><small>Details&#8230;</small></a>\n          </p>\n          <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Add to new list</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li><a href=\"#\">A list</a></li>\n                <li><a href=\"#\">Another list</a></li>\n                <li><a href=\"#\">Third list</a></li>\n              </ul>\n            </div>\n            <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n            <a href=\"#\" class=\"btn btn-success\">Free!</a>\n          </div>\n        </li> -->\n      </ul>\n    </div>\n"

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
        this.articlesFound = [];
        this.articlesLost = [];
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getList()
            .subscribe(function (art) {
            _this.articles = art;
            art.forEach(function (a) {
                if (a.status === "lost")
                    _this.articlesLost.push(a);
                else
                    _this.articlesFound.push(a);
            });
            console.log(_this.articlesFound, _this.articlesLost);
        });
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
exports.push([module.i, "agm-map {\n  height: 200px;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-article/create-article.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1> Submit an article! </h1>\n<a [routerLink]=\"['']\"> Back to home </a> -->\n\n<!-- <select name=\"\" form=\"createarticle\">\n  <option value=\"lost\">Lost</option>\n  <option value=\"found\" selected>Found</option>\n</select>\n\n<form id=\"createarticle\">\n    <label> Name* </label>\n    <input type=\"text\" [(ngModel)]=\"newArticle.name\" name=\"name\" required />\n\n    <label> Description* </label>\n    <input type=\"text\" [(ngModel)]=\"newArticle.name\" name=\"description\" required />\n\n    <label> Localization* </label>\n    <input type=\"text\" [(ngModel)]=\"newArticle.localization\" name=\"localization\" required />\n\n    <label> Date* </label>\n    <input type=\"date\" [(ngModel)]=\"newArticle.date\" name=\"date\" required />\n\n    <label> Reward* </label>\n    <input type=\"number\" [(ngModel)]=\"newArticle.reward\" name=\"reward\" required />\n\n <input type=\"file\" name=\"file\"  id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  <button (click)=\"create()\"> Create Article </button>\n</form> -->\n\n<div class=\"container\">\n\n  <form class=\"well form-horizontal\"  method=\"post\" id=\"contact_form\">\n    <fieldset>\n\n      <!-- Form Name -->\n      <h3 style=\"text-align: center;\">Submit an article!</h3>\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Name</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input [(ngModel)]=\"newArticle.name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Username</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input [(ngModel)]=\"newArticle.username\" name=\"username\"  class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div> -->\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Description</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></span>\n            <input [(ngModel)]=\"newArticle.description\" name=\"description\" placeholder=\"Description\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Date</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></span>\n            <input [(ngModel)]=\"newArticle.date\" name=\"date\" placeholder=\"Date\" class=\"form-control\" type=\"date\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Text input-->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Reward</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-usd\"></i></span>\n            <input [(ngModel)]=\"newArticle.reward\" name=\"reward\" placeholder=\"Reward\" class=\"form-control\" type=\"number\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Select Basic -->\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Lost or found?</label>\n        <div class=\"col-md-4 selectContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></span>\n            <select [(ngModel)]=\"newArticle.status\" name=\"status\" form=\"contact_form\" class=\"form-control selectpicker\">\n      <!-- <option value=\"\" >Have you lost or found this item?</option> -->\n      <option  value=\"lost\">I have lost this item</option>\n      <option  value=\"found\">I have found this item</option>\n    </select>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Upload image</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <input type=\"file\" name=\"file\" id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Text input-->\n      <!-- <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Localization</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-map-marker\"></i></span>\n            <input [(ngModel)]=\"newArticle.localization\" name=\"localization\" placeholder=\"Localization\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div> -->\n\n\n      <h4 style=\"text-align: center;\">Where did you lost or find the article?</h4>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Street and number</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-map-marker\"></i></span>\n            <input [(ngModel)]=\"newArticle.street\" name=\"street\" placeholder=\"Street and number\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">City</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-map-marker\"></i></span>\n            <input [(ngModel)]=\"newArticle.city\" name=\"city\" placeholder=\"City\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Country</label>\n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-map-marker\"></i></span>\n            <input [(ngModel)]=\"newArticle.country\" name=\"country\" placeholder=\"Country\" class=\"form-control\" type=\"text\">\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-xs-3 col-md-3\">\n            </div>\n            <div class=\"col-xs-5 col-md-5\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n            </div>\n            <div class=\"col-xs-4 col-md-4\">\n            </div>\n          </div>\n        </div>\n\n      <br />\n\n      <!-- Button -->\n      <div class=\"form-group\">\n        <div class=\"col-md-5\"></div>\n        <!-- <label class=\"col-md-4 control-label\"></label> -->\n        <div class=\"col-md-2\">\n          <button (click)=\"create()\" class=\"btn btn-warning\">Submit product <span class=\"glyphicon glyphicon-send\"></span></button>\n        </div>\n        <div class=\"col-md-5\"></div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n<!-- /.container -->\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function CreateArticleComponent(router, articleService, auth) {
        this.router = router;
        this.articleService = articleService;
        this.auth = auth;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL + "/api/newArticle"
        });
        this.newArticle = {
            creator: '',
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
        this.lat = 40.3925362;
        this.lng = -3.7004556;
    }
    CreateArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isLoggedIn().subscribe(function (user) {
            _this.newArticle.creator = user._id;
        });
        this.uploader.onSuccessItem = function (item, response) {
            _this.router.navigate(['/']);
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
        };
    };
    CreateArticleComponent.prototype.create = function () {
        var _this = this;
        //console.log(user)
        console.log("FUNCION CREATE");
        var address = this.newArticle.street + ',' + this.newArticle.city + ',' + this.newArticle.country;
        this.articleService.getGeoData(address).subscribe(function (result) {
            _this.newArticle.lat = result.json().results[0].geometry.location.lat;
            _this.newArticle.lng = result.json().results[0].geometry.location.lng;
            _this.articleService.createArticle(_this.newArticle);
            _this.uploader.onBuildItemForm = function (item, form) {
                // form.append('email', this.user.email);
                form.append('creator', _this.newArticle.creator);
                form.append('name', _this.newArticle.name);
                // form.append('username', this.newArticle.username);
                form.append('description', _this.newArticle.description);
                form.append('date', _this.newArticle.date);
                form.append('lat', _this.newArticle.lat);
                form.append('lng', _this.newArticle.lng);
                // form.append('street', this.newArticle.street);
                // form.append('city', this.newArticle.city);
                // form.append('country', this.newArticle.country);
                // form.append('localization', this.newArticle.localization);
                form.append('reward', _this.newArticle.reward);
                form.append('status', _this.newArticle.status);
            };
            _this.uploader.uploadAll();
        });
    };
    return CreateArticleComponent;
}());
CreateArticleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-article',
        template: __webpack_require__("../../../../../src/app/create-article/create-article.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-article/create-article.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_article_service__["a" /* ArticleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], CreateArticleComponent);

var _a, _b, _c;
//# sourceMappingURL=create-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/found-articles/found-articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {background-color:#163a63; color:#163a63; padding-top:15px;}\n\n.list-group {box-shadow: 0px 11px 23px 5px rgba(0,0,0,0.34);}\n\n.list-group-item {background-color: rgba(255,255,255,0.7); border:0;}\n\n.btn-toolbar {margin-top:10px;}\n\nimg {\n  float:left;\n  margin-right:15px;\n  height: 128px;\n  width: 128px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/found-articles/found-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li *ngFor=\"let article of articlesFound\" class=\"list-group-item clearfix\">\n      <img class=\"img-responsive img-rounded\" [src]=\"'http://localhost:3000' + article.image\" height=100 alt=\"\"/>\n      <h3 class=\"list-group-item-heading\">\n        {{ article.name }}\n      </h3>\n      <p class=\"list-group-item-text lead\">\n        {{ article.description }}\n        <br />\n        <a [routerLink]=\"['/article-details', article._id]\"><small>Details&#8230;</small></a>\n      </p>\n      <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Add to new list</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">A list</a></li>\n            <li><a href=\"#\">Another list</a></li>\n            <li><a href=\"#\">Third list</a></li>\n          </ul>\n        </div>\n        <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n        <a href=\"#\" class=\"btn btn-primary\">$29.99</a>\n      </div>\n    </li>\n"

/***/ }),

/***/ "../../../../../src/app/found-articles/found-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoundArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoundArticlesComponent = (function () {
    function FoundArticlesComponent(articleService) {
        this.articleService = articleService;
        this.articlesFound = [];
        this.articlesLost = [];
    }
    FoundArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getList()
            .subscribe(function (art) {
            _this.articles = art;
            art.forEach(function (a) {
                if (a.status === "lost")
                    _this.articlesLost.push(a);
                else
                    _this.articlesFound.push(a);
            });
            console.log(_this.articlesFound, _this.articlesLost);
        });
    };
    return FoundArticlesComponent;
}());
FoundArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-found-articles',
        template: __webpack_require__("../../../../../src/app/found-articles/found-articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/found-articles/found-articles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], FoundArticlesComponent);

var _a;
//# sourceMappingURL=found-articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    width: 100%;\n    height: 100%;\n    /*background-color: #2c3e50;*/\n}\nh1 {\n  font-family: Acme;\n}\np {\n  font-family: Acme;\n}\n.group {\n    width: 340px;\n    height: 40px;\n    padding: 10px 40px;\n    line-height: 40px;\n    position: relative;\n    z-index: 1;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n\n}\n.one {\n    float: left;\n    line-height: 40px;\n    color: white;\n    text-decoration: none;\n    transition: 1.0s;\n    font-family: Acme;\n    font-size: 18px;\n}\n.two {\n    float: right;\n    text-decoration: none;\n    line-height: 40px;\n    /*color: #a6afbf;*/\n    color: white;\n}\n.three {\n  font-family: Acme;\n  font-size: 18px;\n}\n.bg {\n    background-color: #6973a5;\n    height: 60px;\n    width: 190px;\n    position: absolute;\n    top: 0;\n    margin-left: -260px;\n    z-index: -1;\n    transition: 1.0s;\n    border-radius: 5px;\n\n}\n\nspan:hover + .bg {\n    width: 200px;\n    margin-left: -40px;\n    background: #dfc4be;\n}\n\n.two > span:hover {\n    color: white;\n}\n\n.two:hover ~ .one {\n    /*color:#fff;*/\n    color: white;\n}\nspan {\n    padding: 10px 0;\n    transition: 1.0s;\n}\n\n\n\n\n\n\n.jumbotron {\n  background-image: url(http://localhost:3000/uploads/table-stuff.jpg);\n  background-size: cover;\n}\n\n.jumbotron > h1 {\n  position: relative;\n  top: 15px;\n  font-size: 65px;\n  color: #FFA500;\n  font-family: Acme;\n  text-align: center;\n  border: 5px solid;\n  border-radius: 5px;\n  border-color: black;\n}\n\n.jumbotron > p {\n  position: relative;\n  top: 25px;\n  color: white;\n  text-align: center;\n}\n\n.heading {\n  background-color: rgba(64, 64, 64, 0.6)\n}\n\n.heading > span {\n  color: red;\n  font-size: 110px;\n}\n\n.navbar-inverse {\n  position: relative;\n  top: -32px;\n  height: 30px;\n}\n\n.navbar-inverse >ul>li {\n  position: relative;\n  top: -3px;\n  left:25px;\n  color: white;\n  list-style-type: none;\n  display: inline-block;\n  padding-left: 150px;\n  font-size: 15px;\n  float: left;\n}\n.carousel{\n  position:relative;\n  top:-32px;\n  width:100%;\n  background-color: blue;\n  height:420px;\n}\n.carousel-item1{\n  background-image:url(\"http://www.whatsonyourwall.com/abstract-art-5/abstract-guitar-black-colour-size-17963-34205_medium.jpg\");\n  background-size:cover;\n}\n\n.footer-ul > h5{\n  text-align: center;\n  font-size: 80px;\n}\n.section2{\n  background-color:green;\n}\n.live {\n  position:relative;\n  top:550px;\n  font-family: lobster;\n  text-align: center;\n}\n.card{\n  position:relative;\n  top:450px;\n}\n.card > img {\n  position:relative;\n  image-size:cover;\n  height: 280px;\n  width: 368px;\n}\n\n.page-footer {\n  background-color: #333;\n  height: 150px\n}\n\n.call-to-action {\n  background-image: url(https://static1.squarespace.com/static/5772af1029687f3cdf68994e/t/5891260459cc682602b3437b/1485907467216/lr-baggs-electric-guitar-piezo-bridges-banner.jpg?format=1500w);\n}\n\n.footer-ul {\n  height: 250px;\n  list-style-type: none;\n}\n\n.footer-copyright {\n  background-color: #000033;\n  text-align: center;\n}\n\n.footer-ul>li {\n  position: relative;\n  top: 90px;\n  font-family: lobster;\n  text-align: center;\n}\n\n.card-columns {\n  @include media-breakpoint-only(lg) {\n    -webkit-column-count: 4;\n            column-count: 4;\n  }\n  @include media-breakpoint-only(xl) {\n    -webkit-column-count: 5;\n            column-count: 5;\n  }\n}\n\n\n\n#cajita{\n  width: 1300px;\n  margin: 0 auto;\n  font-family: sans-serif;\n}\n\nh1#title{\n  font-size: 46px;\n  font-weight: lighter;\n  line-spacing: .05em;\n  text-align: center;\n  padding: 70px 0 20px 0;\n  font-family: Acme;\n}\n\n#card_wrapper{\n  width: 400px;\n  height: 400px;\n  float: left;\n  margin: 5px 5px;\n  position: relative;\n  overflow: hidden;\n}\n\n.photo{\n  background-size: cover;\n  background-position: center;\n  width: 400px;\n  height: 400px;\n  float: left;\n  position: relative;\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  transition: all .8s ease;\n}\n\n.photo#ander{\n  background-image: url('http://localhost:3000/uploads/ander.jpg');\n  -webkit-filter: grayscale(1);\n}\n\n.photo#marc{\n  background-image: url('http://localhost:3000/uploads/marc.jpg');\n filter: grayscale(1);\n -webkit-filter: grayscale(1);\n}\n\n.photo#ricardo{\n  background-image: url('http://localhost:3000/uploads/ricardo.jpg');\n filter: grayscale(1);\n -webkit-filter: grayscale(1);\n}\n\n.photo#victor{\n  background-image: url('http://localhost:3000/uploads/victor.jpg');\n  -webkit-filter: grayscale(1);\n}\n\n.photo#pablo{\n  background-image: url('http://localhost:3000/uploads/pablo.jpg');\n  background-position: top;\n  -webkit-filter: grayscale(1);\n}\n\n.photo#escobar{\n  background-image: url('http://localhost:3000/uploads/manolo-escobar.jpg');\n filter: grayscale(1);\n -webkit-filter: grayscale(1);\n}\n\n#card_wrapper:hover .photo{\n  -webkit-transform: translateY(-25%);\n          transform: translateY(-25%);\n  transition: -webkit-transform .8s;\n  transition: transform .8s;\n  transition: transform .8s, -webkit-transform .8s;\n}\n\n.photo_hover{\n  width: 400px;\n  /*height: 65px;*/\n  font-family: sans-serif;\n  font-size: 16px;\n  vertical-align: middle;\n  color: #fff;\n  position: absolute;\n  bottom: 0px;\n  opacity: 1;\n  padding: 25px;\n  background-color: #676767;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  transition: all 1s ease;\n}\n\n#card_wrapper:hover .photo_hover{\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  transition: -webkit-transform .8s;\n  transition: transform .8s;\n  transition: transform .8s, -webkit-transform .8s;\n}\n\n\n.photo_hover h1{\n  margin: 0;\n  line-height: 50px;\n  font-weight: lighter;\n  letter-spacing: .01em;\n}\n\n.photo_hover h2{\n  margin: 0;\n  font-size: 12px;\n  line-height: 0px;\n  font-weight: lighter;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n}\n\n.photo_hover .cta{\n  background-color: thistle;\n  padding: 15px 30px 15px 30px;\n  float: right;\n  position: absolute;\n  right: 30px;\n  top: 50%;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: .1em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-decoration: none;\n  color: #fff;\n  transition: all .6s ease;\n}\n\n.clear{\n  clear: both;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"center-block\">WOWY</h1> -->\n\n\n\n<div class=\"jumbotron\">\n\t\t <h1 class=\"heading\">Don't lose anything, ever<br><span style=\"color: #dfc4be;\">WOWY</span></h1>\n\t\t <p></p>\n\n\t\t <div class=\"main\">\n\t\t\t\t\t\t\t\t <div class=\"group\">\n\t\t\t\t\t\t\t\t\t\t <a [routerLink]=\"['/lost-articles']\" class=\"two\">\n\t\t\t\t\t\t\t\t\t\t\t\t <span class=\"three\">FOUND</span>\n\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"bg\"></div>\n\t\t\t\t\t\t\t\t\t\t </a>\n\t\t\t\t\t\t\t\t\t\t <a [routerLink]=\"['/found-articles']\" class=\"one\">LOST</a>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </div>\n\n\t\t <!-- <p><a class=\"btn btn-success btn-lg\" href=\"#\" role=\"button\">Lost</a><a class=\"btn btn-success btn-lg\" href=\"#\" role=\"button\">Found</a></p> -->\n</div>\n\n\n\n\n\n<div id=\"cajita\">\n  <h1 id=\"title\">Some of our happy users</h1>\n\n\n  <div id=\"card_wrapper\">\n    <div class=\"photo\" id=\"ander\"></div>\n    <div class=\"photo_hover\">\n      <h1>Ánder el Conquistador</h1>\n      <p style=\"font-size: 18px;\">Nunca recuperé la bici, pero son unos tíos de puta madre.</p>\n    </div>\n  </div>\n\n  <div id=\"card_wrapper\">\n    <div class=\"photo\" id=\"marc\"></div>\n    <div class=\"photo_hover\">\n      <h1>Boyandeeeeerrrrr</h1>\n      <p style=\"font-size: 18px;\">Si no fuera por Wowy no podría ponerme otra vez mi camisa de flamencos.</p>\n    </div>\n  </div>\n\n  <div id=\"card_wrapper\">\n    <div class=\"photo\" id=\"ricardo\"></div>\n      <div class=\"photo_hover\">\n        <h1>Richard Black</h1>\n        <p style=\"font-size: 18px;\">Gracias Wowy por devolverme la sonrisa</p>\n\n    </div>\n  </div>\n\n  <div id=\"card_wrapper\">\n    <div class=\"photo\" id=\"victor\"></div>\n      <div class=\"photo_hover\">\n        <h1>Víctor to flama</h1>\n        <p style=\"font-size: 18px;\">Mi chihuahua Andrei y yo os estaremos eternamente agradecidos</p>\n    </div>\n  </div>\n\n  <div id=\"card_wrapper\">\n    <div class=\"photo\" id=\"pablo\"></div>\n      <div class=\"photo_hover\">\n        <h1>Pablo Fuentes</h1>\n        <p style=\"font-size: 18px;\">¡Coño! ¿Pero esto no era una página de contactos?</p>\n    </div>\n  </div>\n\n  <div id=\"card_wrapper\">\n    <div class=\"photo\" id=\"escobar\"></div>\n      <div class=\"photo_hover\">\n        <h1>Manolo Escobar</h1>\n        <p style=\"font-size: 18px;\">No encontré el carro, pero ahora voy en una bici muy guapa. Gracias Ánder...digo Wowy!</p>\n    </div>\n  </div>\n\n\n  <div class=\"clear\"></div>\n</div>\n"

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

/***/ "../../../../../src/app/lost-articles/lost-articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {background-color:#163a63; color:#163a63; padding-top:15px;}\n\n.list-group {box-shadow: 0px 11px 23px 5px rgba(0,0,0,0.34);}\n\n.list-group-item {background-color: rgba(255,255,255,0.7); border:0;}\n\n.btn-toolbar {margin-top:10px;}\n\nimg {\n  float:left;\n  margin-right:15px;\n  height: 128px;\n  width: 128px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lost-articles/lost-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li *ngFor=\"let article of articlesLost\" class=\"list-group-item clearfix\">\n      <img class=\"img-responsive img-rounded\" [src]=\"'http://wowy-project.herokuapp.com' + article.image\" height=100 alt=\"\"/>\n      <h3 class=\"list-group-item-heading\">\n        {{ article.name }}\n      </h3>\n      <p class=\"list-group-item-text lead\">\n        {{ article.description }}\n        <br />\n        <a [routerLink]=\"['/article-details', article._id]\"><small>Details&#8230;</small></a>\n      </p>\n      <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fa fa-fw fa-list\"></i> <span class=\"caret\"></span></button>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Add to new list</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">A list</a></li>\n            <li><a href=\"#\">Another list</a></li>\n            <li><a href=\"#\">Third list</a></li>\n          </ul>\n        </div>\n        <a href=\"#\" class=\"btn btn-default\">Add to cart</a>\n        <a href=\"#\" class=\"btn btn-primary\">$29.99</a>\n      </div>\n    </li>\n"

/***/ }),

/***/ "../../../../../src/app/lost-articles/lost-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LostArticlesComponent = (function () {
    function LostArticlesComponent(articleService) {
        this.articleService = articleService;
        this.articlesFound = [];
        this.articlesLost = [];
    }
    LostArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getList()
            .subscribe(function (art) {
            _this.articles = art;
            art.forEach(function (a) {
                if (a.status === "lost")
                    _this.articlesLost.push(a);
                else
                    _this.articlesFound.push(a);
            });
            console.log(_this.articlesFound, _this.articlesLost);
        });
    };
    return LostArticlesComponent;
}());
LostArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lost-articles',
        template: __webpack_require__("../../../../../src/app/lost-articles/lost-articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lost-articles/lost-articles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_article_service__["a" /* ArticleService */]) === "function" && _a || Object])
], LostArticlesComponent);

var _a;
//# sourceMappingURL=lost-articles.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__found_articles_found_articles_component__ = __webpack_require__("../../../../../src/app/found-articles/found-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lost_articles_lost_articles_component__ = __webpack_require__("../../../../../src/app/lost-articles/lost-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'article-details/:id', component: __WEBPACK_IMPORTED_MODULE_4__article_details_article_details_component__["a" /* ArticleDetailsComponent */] },
    { path: 'article-list', component: __WEBPACK_IMPORTED_MODULE_5__article_list_article_list_component__["a" /* ArticleListComponent */] },
    { path: 'create-article', component: __WEBPACK_IMPORTED_MODULE_6__create_article_create_article_component__["a" /* CreateArticleComponent */] },
    { path: 'newArticle', component: __WEBPACK_IMPORTED_MODULE_6__create_article_create_article_component__["a" /* CreateArticleComponent */] },
    { path: 'found-articles', component: __WEBPACK_IMPORTED_MODULE_7__found_articles_found_articles_component__["a" /* FoundArticlesComponent */] },
    { path: 'lost-articles', component: __WEBPACK_IMPORTED_MODULE_8__lost_articles_lost_articles_component__["a" /* LostArticlesComponent */] },
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
        return this.http.get(this.BASE_URL + "/api/articles/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.createArticle = function (newArticle) {
        console.log("NEW ARTICLE", newArticle);
        console.log("" + this.BASE_URL);
        return this.http.post(this.BASE_URL + "/api/newArticle", newArticle, this.options)
            .map(function (res) { return res.json(); });
    };
    ArticleService.prototype.getGeoData = function (address) {
        // Aquí va la URL de la API de Google Maps
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address);
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
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
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
// export const environment = {
//   production: false,
//   BASE_URL: 'http://localhost:3000'
// };
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    BASE_URL: ''
};
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