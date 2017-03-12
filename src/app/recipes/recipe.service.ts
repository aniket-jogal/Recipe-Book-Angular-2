// import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Http } from '@angular/http';
// @Injectable()
export class RecipeService {


  constructor() { }
  // tslint:disable-next-line:member-ordering
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Butter Chicken', 'Butter Chicken', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/250px-Chicken_makhani.jpg'),
  ];
  getRecipes() {
    return this.recipes;
  }

}
