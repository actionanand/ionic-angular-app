import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeServ: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) {
        
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeServ.getSingleRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.recipeServ.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipe']);
  }

}
