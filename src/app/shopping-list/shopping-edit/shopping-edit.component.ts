import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('ingredientAdded') ingredientAdded =  new EventEmitter<{name: string, ammount: number}>()

  addIngredient(name, ammount){
    this.ingredientAdded.emit({name: name, ammount: ammount})
  }

}
