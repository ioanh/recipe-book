import { Component, OnInit } from '@angular/core';
import { ShoppingListSerivce } from 'src/app/shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.serivce';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor( private recipeService: RecipesService, private shoppingListService: ShoppingListSerivce) { }

  recipe: Recipe;

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipeRecieved) => {
        this.recipe = recipeRecieved
      }
    )
  }

  addToShoppingList(ingredients){
    ingredients.forEach(element => {
      this.shoppingListService.addIngredientToList(element);
      console.log(element.ammount)
    });
  }



  
}
