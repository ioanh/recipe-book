import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'
import { RecipesService } from './recipes.serivce';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }


}
