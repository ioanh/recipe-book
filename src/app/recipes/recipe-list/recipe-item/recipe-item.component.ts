import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @Input('oneRecipe') recipe: Recipe; 

}
