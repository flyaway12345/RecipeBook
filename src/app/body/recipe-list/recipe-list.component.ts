import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../models/recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:IRecipe[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
