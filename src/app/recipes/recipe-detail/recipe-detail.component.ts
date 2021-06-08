import { Component, OnInit } from '@angular/core';
import { ShoppingListSerivce } from 'src/app/shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.serivce';
import {Ingredient} from '../../shared/ingredient.model'

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

  //ADDING THE INGREDIENTS TO THE SHOPPING LIST COMPONENT WITH THE SHOPPING LIST SERVICE 
  addToShoppingList(ingredients: Ingredient[]){
    // 1. FIRST OPTION
    // ingredients.forEach(element => {
    //   this.shoppingListService.addIngredientToList(element);
    //   console.log(element.ammount)
    // });
    //
    // 2. SECOND OPTION WICH IS BETTER - MAKING A SEPERATE METHOD FOR THIS PURPOSE
    this.shoppingListService.addIngredientsToList(ingredients);
  }



  
}
