import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('oneRecipe') recipe: Recipe; 
  @Output('recipeSelected') recipeSent = new EventEmitter<{selectedRecipe: Recipe}>();


  recipeClicked(){
    this.recipeSent.emit({
      selectedRecipe: this.recipe
    })
  }

}
