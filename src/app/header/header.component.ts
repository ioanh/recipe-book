import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('navClicked') navClicked = new EventEmitter <{typeClicked: string}>();

  GoToRecipes(){
    this.navClicked.emit({typeClicked: 'recipesClicked'})
  }
  GoToShoppingList(){
    this.navClicked.emit({typeClicked: 'shoppingListClicked'})
  }

}
