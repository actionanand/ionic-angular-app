import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeServ: RecipeService, 
    private router: Router, private alertCntr: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) {
        this.router.navigate(['/recipe']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeServ.getSingleRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
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
          handler: ()=> {
            this.recipeServ.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipe']);
          }
        }
      ]
    })
    .then(alertEl => {
      alertEl.present();
    });

  }

}
