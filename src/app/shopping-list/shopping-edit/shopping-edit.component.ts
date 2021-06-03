import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListSerivce } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shgoppingListService: ShoppingListSerivce) { }

  ngOnInit() {
  }


  addIngredient(name, ammount){
    this.shgoppingListService.addIngredientToList({name: name, ammount: ammount})
  }

}
