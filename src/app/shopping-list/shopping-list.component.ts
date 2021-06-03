import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListSerivce } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListSerivce]
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListSerivce) { }

  ingredients: Ingredient [] = [];

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
  }


}
