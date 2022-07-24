(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipe-recipe-details-recipe-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe/recipe-details/recipe-details.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe/recipe-details/recipe-details.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recipe\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{loadedRecipe.title}} </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDeleteRecipe()\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"loadedRecipe.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\">{{loadedRecipe.title}}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-list>\n            <ion-item *ngFor=\"let ig of loadedRecipe.ingredients\">\n              {{ ig }}\n            </ion-item>\n          </ion-list>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipe/recipe-details/recipe-details-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/recipe/recipe-details/recipe-details-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RecipeDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPageRoutingModule", function() { return RecipeDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-details.page */ "./src/app/recipe/recipe-details/recipe-details.page.ts");




var routes = [
    {
        path: '',
        component: _recipe_details_page__WEBPACK_IMPORTED_MODULE_3__["RecipeDetailsPage"]
    }
];
var RecipeDetailsPageRoutingModule = /** @class */ (function () {
    function RecipeDetailsPageRoutingModule() {
    }
    RecipeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RecipeDetailsPageRoutingModule);
    return RecipeDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipe/recipe-details/recipe-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipe/recipe-details/recipe-details.module.ts ***!
  \****************************************************************/
/*! exports provided: RecipeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPageModule", function() { return RecipeDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipe_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-details-routing.module */ "./src/app/recipe/recipe-details/recipe-details-routing.module.ts");
/* harmony import */ var _recipe_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-details.page */ "./src/app/recipe/recipe-details/recipe-details.page.ts");







var RecipeDetailsPageModule = /** @class */ (function () {
    function RecipeDetailsPageModule() {
    }
    RecipeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _recipe_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsPageRoutingModule"]
            ],
            declarations: [_recipe_details_page__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailsPage"]]
        })
    ], RecipeDetailsPageModule);
    return RecipeDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/recipe/recipe-details/recipe-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipe/recipe-details/recipe-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUtZGV0YWlscy9yZWNpcGUtZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipe/recipe-details/recipe-details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipe/recipe-details/recipe-details.page.ts ***!
  \**************************************************************/
/*! exports provided: RecipeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPage", function() { return RecipeDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_service_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/recipe.service */ "./src/app/service/recipe.service.ts");





var RecipeDetailsPage = /** @class */ (function () {
    function RecipeDetailsPage(route, recipeServ, router, alertCntr) {
        this.route = route;
        this.recipeServ = recipeServ;
        this.router = router;
        this.alertCntr = alertCntr;
    }
    RecipeDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
                _this.router.navigate(['/recipe']);
                return;
            }
            var recipeId = paramMap.get('recipeId');
            _this.loadedRecipe = _this.recipeServ.getSingleRecipe(recipeId);
        });
    };
    RecipeDetailsPage.prototype.onDeleteRecipe = function () {
        var _this = this;
        this.alertCntr.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete the recipe?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.recipeServ.deleteRecipe(_this.loadedRecipe.id);
                        _this.router.navigate(['/recipe']);
                    }
                }
            ]
        })
            .then(function (alertEl) {
            alertEl.present();
        });
    };
    RecipeDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_service_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    RecipeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-details',
            template: __webpack_require__(/*! raw-loader!./recipe-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipe/recipe-details/recipe-details.page.html"),
            styles: [__webpack_require__(/*! ./recipe-details.page.scss */ "./src/app/recipe/recipe-details/recipe-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RecipeDetailsPage);
    return RecipeDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipe-recipe-details-recipe-details-module-es5.js.map