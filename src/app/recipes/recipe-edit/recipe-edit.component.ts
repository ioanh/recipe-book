import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  allowEdit = false;
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.allowEdit = params['id'] != null
    })
  }

}
