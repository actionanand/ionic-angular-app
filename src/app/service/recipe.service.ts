import { Injectable } from '@angular/core';

import { Recipe } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 're21',
      title: 'Cheese Chicken Burger',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      ingredients: ['bun','chicken meat','cheese','salad']
    },
    {
      id: 'uh13',
      title: 'Tasty Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: ['french fries','pork meat','salad']
    }
  ];

  constructor() { }

  getAllRecipe() {
    return [...this.recipes];
  }

  getSingleRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
}
