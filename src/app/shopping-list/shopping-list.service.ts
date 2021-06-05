import {Ingredient} from '../shared/ingredient.model'
export class ShoppingListSerivce{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredientToList(data){
        this.ingredients.push(new Ingredient(data.name, data.ammount))
      }
}