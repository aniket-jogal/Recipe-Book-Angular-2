import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeServices.storeData().subscripe(
      data => console.log(data),
      error => console.error(error)
    );
  }
  onFetch() {
    this.recipeService.fetchData();
  }
  ngOnInit() {
  }

}
