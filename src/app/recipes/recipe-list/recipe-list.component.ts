import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
   this.recipes = this.recipeservice.getRecipes();
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  } 

}
