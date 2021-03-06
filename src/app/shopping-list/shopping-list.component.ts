import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListSerivce } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListSerivce) { }

  ingredients: Ingredient [] = [];

  ngOnInit() {
    //Fetching the ingredients array from the shoppinglist service
    this.ingredients = this.shoppingListService.getIngredients()
    //Listening whenever an ingredient was added to the list so we can update it
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientArr) => {
        this.ingredients = ingredientArr
      }
    )
  }


}
