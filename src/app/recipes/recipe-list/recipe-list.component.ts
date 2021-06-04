import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.serivce';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];


  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }



  constructor(private recipesService: RecipesService){}




}
