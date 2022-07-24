(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipe-recipe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe/recipe-item/recipe-item.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe/recipe-item/recipe-item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [routerLink]=\"['./', recipeItem.id]\">\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipeItem.imageUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label>{{recipeItem.title}}</ion-label>\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe/recipe.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe/recipe.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>recipe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-item *ngFor=\"let recipe of recipes\" [recipeItem]=\"recipe\"></app-recipe-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipe/recipe-item/recipe-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/recipe/recipe-item/recipe-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUtaXRlbS9yZWNpcGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipe/recipe-item/recipe-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipe/recipe-item/recipe-item.component.ts ***!
  \*************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeItemComponent.prototype, "recipeItem", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! raw-loader!./recipe-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.scss */ "./src/app/recipe/recipe-item/recipe-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/recipe/recipe-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RecipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageRoutingModule", function() { return RecipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.page */ "./src/app/recipe/recipe.page.ts");




var routes = [
    {
        path: '',
        component: _recipe_page__WEBPACK_IMPORTED_MODULE_3__["RecipePage"]
    }
];
var RecipePageRoutingModule = /** @class */ (function () {
    function RecipePageRoutingModule() {
    }
    RecipePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RecipePageRoutingModule);
    return RecipePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.module.ts":
/*!*****************************************!*\
  !*** ./src/app/recipe/recipe.module.ts ***!
  \*****************************************/
/*! exports provided: RecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageModule", function() { return RecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-routing.module */ "./src/app/recipe/recipe-routing.module.ts");
/* harmony import */ var _recipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe.page */ "./src/app/recipe/recipe.page.ts");
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ "./src/app/recipe/recipe-item/recipe-item.component.ts");








var RecipePageModule = /** @class */ (function () {
    function RecipePageModule() {
    }
    RecipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipePageRoutingModule"]
            ],
            declarations: [_recipe_page__WEBPACK_IMPORTED_MODULE_6__["RecipePage"], _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipeItemComponent"]]
        })
    ], RecipePageModule);
    return RecipePageModule;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.page.scss":
/*!*****************************************!*\
  !*** ./src/app/recipe/recipe.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS9yZWNpcGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipe/recipe.page.ts":
/*!***************************************!*\
  !*** ./src/app/recipe/recipe.page.ts ***!
  \***************************************/
/*! exports provided: RecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePage", function() { return RecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/recipe.service */ "./src/app/service/recipe.service.ts");



var RecipePage = /** @class */ (function () {
    function RecipePage(recipeServ) {
        this.recipeServ = recipeServ;
    }
    RecipePage.prototype.ngOnInit = function () { };
    RecipePage.prototype.ionViewWillEnter = function () {
        this.recipes = this.recipeServ.getAllRecipe();
    };
    RecipePage.ctorParameters = function () { return [
        { type: _service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }
    ]; };
    RecipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! raw-loader!./recipe.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipe/recipe.page.html"),
            styles: [__webpack_require__(/*! ./recipe.page.scss */ "./src/app/recipe/recipe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], RecipePage);
    return RecipePage;
}());



/***/ })

}]);
//# sourceMappingURL=recipe-recipe-module-es5.js.map