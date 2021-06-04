import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.serivce';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor( private recipeService: RecipesService) { }

  recipe: Recipe;

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipeRecieved) => {
        this.recipe = recipeRecieved
      }
    )
  }



  
}
