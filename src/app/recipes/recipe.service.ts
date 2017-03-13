import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

import { environment } from '../../environments/environment';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  constructor(private http: Http) { }
  // tslint:disable-next-line:member-ordering
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Butter Chicken', 'Butter Chicken', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/250px-Chicken_makhani.jpg'),
  ];
  getRecipes() {
    return this.recipes;
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.slice(this.recipes.indexOf(recipe), 1);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  editData(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'content-type': 'application/json'
    });
    return this.http.put(environment.recipe_services, body, { headers: headers });

  }
  fetchData() {
    return this.http.get(environment.recipe_services)
      .map((response: Response) => response.json())
      .subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
        this.recipesChanged.emit(this.recipes)
      }
      )
  }

}
