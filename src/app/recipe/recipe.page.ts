import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes: Recipe[];
  constructor(private recipeServ: RecipeService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.recipes = this.recipeServ.getAllRecipe()
  }

}
