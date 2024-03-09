import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    // Initialize with some sample recipes
    this.newRecipe({ recipeName: 'A Test Recipe 1', recipeDesc: 'This is simply a test 1' });
    this.newRecipe({ recipeName: 'A Test Recipe 2', recipeDesc: 'This is simply a test 2' });
  }

  newRecipe(recipe: { recipeName: string; recipeDesc: string }) {
    const newRecipe = new Recipe(recipe.recipeName, recipe.recipeDesc, 'Anything goes here...');
    this.recipes.push(newRecipe);
  }
}