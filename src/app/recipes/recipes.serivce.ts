import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model'
export class RecipesService{
    
    private recipes: Recipe[] = [
        new Recipe(1, 'A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Meat', 20)]),
        new Recipe(2, 'A Test Cunt', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Meat', 20)])
      ];

    getRecipes() {
        return this.recipes.slice()
    }

    //TODO FUNCTIOn
    getRecipe(id: number) {
        const recipe = this.recipes.find(recipe => recipe.id === id)
        return recipe;
    }
}