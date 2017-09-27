webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-question/add-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-question/add-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Add A Question</h1>\n  <form (submit)='onSubmit()'\n  #formData = 'ngForm'>\n    <p>\n      Question:\n      <br>\n      <textarea rows=\"4\" cols=\"50\"\n      name=\"theQuestion\"\n      required\n      minlength=\"10\"\n      [(ngModel)]='question.question'\n      #theQuestion=\"ngModel\">\n      </textarea>\n    </p>\n    <p>\n      Description(Optional):\n      <br>\n      <textarea rows=\"4\" cols=\"50\"\n      name=\"description\"\n      [(ngModel)]='question.description'\n      #description=\"ngModel\">\n      </textarea>\n    </p>\n    <button (click)='cancel()'>Cancel</button>\n    <input type=\"submit\" value=\"Submit\" [disabled]='!formData.valid'>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-question/add-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddQuestionComponent = (function () {
    function AddQuestionComponent(_mainService, _router) {
        this._mainService = _mainService;
        this._router = _router;
        this.question = {
            question: '',
            description: ''
        };
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.cancel = function () {
        this._router.navigateByUrl('/questions');
    };
    AddQuestionComponent.prototype.onSubmit = function () {
        this._mainService.addQuestion(this.question);
        this.question = {
            question: '',
            description: ''
        };
        this._router.navigateByUrl('/questions');
    };
    return AddQuestionComponent;
}());
AddQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-add-question',
        template: __webpack_require__("../../../../../src/app/add-question/add-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-question/add-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddQuestionComponent);

var _a, _b;
//# sourceMappingURL=add-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/answer-question/answer-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer-question/answer-question.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"/questions\">Home</a> | <a href='' (click)='cancel()'>Go Back to Question</a>\n<div class=\"question\">\n    <h1>{{question.question}}</h1>\n    <h5>{{question.description}}</h5>\n</div>\n\n<h1>Add A Answer</h1>\n<form (submit)='onSubmit()'\n#formData = 'ngForm'>\n  <p>\n    Your Answer:\n    <br>\n    <textarea rows=\"4\" cols=\"50\"\n    name=\"response\"\n    required\n    minlength=\"5\"\n    [(ngModel)]='answer.response'\n    #response=\"ngModel\">\n    </textarea>\n  </p>\n  <p>\n    Supporting Details(Optional):\n    <br>\n    <textarea rows=\"4\" cols=\"50\"\n    name=\"support\"\n    [(ngModel)]='answer.support'\n    #description=\"ngModel\">\n    </textarea>\n  </p>\n  <button (click)='cancel()'>Cancel</button>\n  <input type=\"submit\" value=\"Submit\" [disabled]='!formData.valid'>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/answer-question/answer-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerQuestionComponent = (function () {
    function AnswerQuestionComponent(_mainService, _router, _location, _route) {
        var _this = this;
        this._mainService = _mainService;
        this._router = _router;
        this._location = _location;
        this._route = _route;
        this.answer = {
            response: '',
            support: '',
        };
        this._route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
            _this.getQuestion(params.get('id'));
        });
    }
    AnswerQuestionComponent.prototype.ngOnInit = function () {
    };
    AnswerQuestionComponent.prototype.getQuestion = function (id) {
        var _this = this;
        this._mainService.getOne(id, function (question) {
            _this.question = question;
        });
    };
    AnswerQuestionComponent.prototype.onSubmit = function () {
        this._mainService.addAnswer(this.id, this.answer);
        this.answer = {
            response: '',
            support: '',
        };
        this._location.back();
    };
    AnswerQuestionComponent.prototype.cancel = function () {
        this._location.back();
    };
    return AnswerQuestionComponent;
}());
AnswerQuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-answer-question',
        template: __webpack_require__("../../../../../src/app/answer-question/answer-question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/answer-question/answer-question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], AnswerQuestionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=answer-question.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_question_answer_question_component__ = __webpack_require__("../../../../../src/app/answer-question/answer-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_question_add_question_component__ = __webpack_require__("../../../../../src/app/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_3__question_list_question_list_component__["a" /* QuestionListComponent */] },
    { path: 'newQuestion', component: __WEBPACK_IMPORTED_MODULE_2__add_question_add_question_component__["a" /* AddQuestionComponent */] },
    { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_1__question_question_component__["a" /* QuestionComponent */] },
    { path: 'question/:id/newAnswer', component: __WEBPACK_IMPORTED_MODULE_0__answer_question_answer_question_component__["a" /* AnswerQuestionComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__answer_question_answer_question_component__ = __webpack_require__("../../../../../src/app/answer-question/answer-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_list_question_list_component__ = __webpack_require__("../../../../../src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_question_add_question_component__ = __webpack_require__("../../../../../src/app/add-question/add-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_list_question_list_component__["a" /* QuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__add_question_add_question_component__["a" /* AddQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_0__answer_question_answer_question_component__["a" /* AnswerQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__question_question_component__["a" /* QuestionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\r\n  margin-top: 250px;\r\n  margin-left: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>Q & A</h1>\n  <div class=\"center\">\n    <form (submit)='onSubmit()'\n    #formData = 'ngForm'>\n      <p>\n        Name:\n        <input type=\"text\"\n        name='name'\n        required\n        [(ngModel)] = 'user'\n        #name = 'ngModel'>\n      </p>\n      <br>\n      <input type=\"submit\" value=\"Enter\" [disabled]='!formData.valid'>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_mainService, _router) {
        this._mainService = _mainService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        this._mainService.newUser(this.user);
        this._router.navigateByUrl('/questions');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
    }
    MainService.prototype.newUser = function (user) {
        this.user = user;
    };
    MainService.prototype.getUser = function () {
        return this.user;
    };
    MainService.prototype.addQuestion = function (question) {
        return this._http.post("/api/questions", question)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            return response.json();
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.retrieveQuestions = function (callback) {
        this._http.get('/api/questions').subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.getOne = function (id, callback) {
        this._http.get('/api/questions/' + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.setId = function (id) {
        this.id = id;
    };
    MainService.prototype.getId = function () {
        return this.id;
    };
    MainService.prototype.addAnswer = function (id, answer) {
        return this._http.put('/api/questions/' + id, answer)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            return response.json();
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.findAnswer = function (id, callback) {
        this._http.get('/api/answers/' + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.updateAnswer = function (id, answer, callback) {
        this._http.put('/api/answers/' + id, answer)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    return MainService;
}());
MainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MainService);

var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".questions {\r\n  margin-top: 100px;\r\n  margin-left: 400px;\r\n}\r\n\r\ntable{\r\n  width: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Hello {{user}}!</h1>\n  <a href='/newQuestion'>Add A question</a>\n  <div class=\"questions\">\n    <table>\n      <thead>\n        <tr>\n          <th>Question</th>\n          <th>Answers</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor='let question of questions'>\n          <td>{{question.question}}</td>\n          <td>{{question.answers.length}}</td>\n          <td><a href=\"/question/{{question._id}}\">Show</a> | <a href=\"/question/{{question._id}}/newAnswer\">Answer</a>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionListComponent = (function () {
    function QuestionListComponent(_mainService, _router) {
        this._mainService = _mainService;
        this._router = _router;
        this.user = this._mainService.getUser();
        this.getQuestions();
    }
    QuestionListComponent.prototype.ngOnInit = function () {
    };
    QuestionListComponent.prototype.getQuestions = function () {
        var _this = this;
        this._mainService.retrieveQuestions(function (questions) {
            _this.questions = questions;
        });
    };
    QuestionListComponent.prototype.setId = function (id) {
        this._mainService.setId(id);
        console.log(id);
    };
    return QuestionListComponent;
}());
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-question-list',
        template: __webpack_require__("../../../../../src/app/question-list/question-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question-list/question-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], QuestionListComponent);

var _a, _b;
//# sourceMappingURL=question-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"/questions\">Home</a> | <a [routerLink]=\"['newAnswer']\">Answer this Question</a>\n<div class=\"question\">\n  <h1>Question: {{question. question}}</h1>\n  <h5>Description: {{question.description}}</h5>\n</div>\n<div id=\"answers\" *ngIf='question.answers !== undefined'>\n  <div class=\"answer\" *ngFor='let answer of question.answers'>\n    <h4>Answer: {{answer.response}}</h4>\n    <p>Supporting Details: {{answer.support}}</p>\n    <p>{{answer.likes}} likes</p> <button (click)='like(answer._id)'>Like!</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = (function () {
    function QuestionComponent(_mainService, _router, _route) {
        var _this = this;
        this._mainService = _mainService;
        this._router = _router;
        this._route = _route;
        this._route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this._mainService.setId(_this.id);
            _this.getQuestion();
        });
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.getQuestion = function () {
        var _this = this;
        this._mainService.getOne(this.id, function (question) {
            _this.question = question;
        });
    };
    QuestionComponent.prototype.like = function (id) {
        var _this = this;
        this._mainService.findAnswer(id, function (theAnswer) {
            _this.answer = theAnswer[0];
            _this.answer.likes++;
            console.log(_this.answer);
            _this._mainService.updateAnswer(id, _this.answer, function (answer) {
                console.log('SENT ANSWER');
            });
            _this.getQuestion();
        });
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], QuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=question.component.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map