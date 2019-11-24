import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
