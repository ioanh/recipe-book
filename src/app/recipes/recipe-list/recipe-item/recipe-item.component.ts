import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.serivce';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
  }

  @Input('oneRecipe') recipe: Recipe; 


  recipeClicked(){
    this.recipesService.recipeSelected.emit(this.recipe);
    console.log(this.recipesService.getRecipe(1))
  }

}
