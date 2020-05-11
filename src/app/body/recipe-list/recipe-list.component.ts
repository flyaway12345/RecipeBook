import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../models/recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:IRecipe[] = [{
    "title":"Piragi",
    "mealType": "Snack",
    "servingSize": 8,
    "difficultyLevel": "medium",
    "imagePath": "https://s3-media0.fl.yelpcdn.com/bphoto/zRKoqEtfoG8qamlROlaZIA/348s.jpg",
    "ingredients": ["Pilsberry Buttermilk Biscut Dough",
  "Bacon","Onion"],
    "direction": ["Sauteed Onion and bacon in a cast iron pan until almost brown",
    "wrap in puff pastry", "Bake Until golden"]
  },{
    "title":"Sweet Potato Cheesecake",
    "mealType": "Dessert",
    "servingSize": 8,
    "difficultyLevel": "medium",
    "imagePath": "https://s3-media0.fl.yelpcdn.com/bphoto/zRKoqEtfoG8qamlROlaZIA/348s.jpg",
    "ingredients": ["Pilsberry Buttermilk Biscut Dough",
  "Bacon","Onion"],
    "direction": ["dud","dud"]
  },{
    "title":"Piragi",
  "mealType": "Snack",
  "servingSize": 8,
  "difficultyLevel": "medium",
  "imagePath": "https://s3-media0.fl.yelpcdn.com/bphoto/zRKoqEtfoG8qamlROlaZIA/348s.jpg",
  "ingredients": ["Pilsberry Buttermilk Biscut Dough",
"Bacon","Onion"],
  "direction": ["dud","dud"]
},{
    "title":"Piragi",
  "mealType": "Snack",
  "servingSize": 8,
  "difficultyLevel": "medium",
  "imagePath": "https://s3-media0.fl.yelpcdn.com/bphoto/zRKoqEtfoG8qamlROlaZIA/348s.jpg",
  "ingredients": ["Pilsberry Buttermilk Biscut Dough",
"Bacon","Onion"],
  "direction": ["dud","dud"]
},{
  "title":"Piragi",
"mealType": "Snack",
"servingSize": 8,
"difficultyLevel": "medium",
"imagePath": "https://s3-media0.fl.yelpcdn.com/bphoto/zRKoqEtfoG8qamlROlaZIA/348s.jpg",
"ingredients": ["Pilsberry Buttermilk Biscut Dough",
"Bacon","Onion"],
"direction": ["dud","dud"]}]

  constructor() { }

  ngOnInit(): void {
    
  }

}
