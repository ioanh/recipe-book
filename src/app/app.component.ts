import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipesSelected: boolean;
  shoppingListSelected: boolean;

  navClicked(typeClicked){
    console.log(typeClicked.typeClicked === 'recipesClicked')
    if(typeClicked.typeClicked === 'recipesClicked'){
      this.recipesSelected = true;
      this.shoppingListSelected = false;
    }else{
      this.recipesSelected = false;
      this.shoppingListSelected = true;
    }
  }
}
