import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.serivce';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
