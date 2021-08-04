import {EventEmitter} from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model'
export class RecipesService{

    recipeSelected = new EventEmitter<Recipe>(); 
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Meat', 20)]),
        new Recipe('A Test Cunt', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Meat', 20)])
      ];

    getRecipes() {
        return this.recipes.slice()
    }

    //TODO FUNCTIOn
    getRecipe() {

    }
}