import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
export class ShoppingListSerivce{

    ingredientsChanged = new EventEmitter<Ingredient []>()
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredientToList(data: Ingredient){
        this.ingredients.push(new Ingredient(data.name, data.ammount))
        //Updating the listening components to the change in the Ingredient array 
        this.ingredientsChanged.emit(this.ingredients.slice())
      }

    addIngredientsToList(data: Ingredient[]){
      this.ingredients.push(...data);
      this.ingredientsChanged.emit(this.ingredients.slice())
    }
}