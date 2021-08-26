import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.serivce';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  allowEdit = false;
  id: number;
  recipe: Recipe;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.recipe = this.recipesService.getRecipe(this.id)
      this.allowEdit = params['id'] != null
    })
  }

}
