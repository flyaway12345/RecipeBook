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
    "imagePath": "https://images-gmi-pmc.edge-generalmills.com/a40a35c4-741f-49bb-93ee-1673d605d639.jpg",
    "ingredients": ["1 package (8 oz) cream cheese, not softened", "1/4 cup granulated sugar", "1 egg", "1 teaspoon grated orange peel"],
    "direction": ["Step 1: Place cookie sheet on oven rack. Heat oven to 350°F. In small bowl, beat cream cheese and sugar on low speed until well blended. Add egg; beat well. Stir in orange peel. Set aside","Step 2: Place sweet potatoes in food processor; cover and process until smooth. In large bowl, beat sweet potato layer ingredients with wire whisk. Spread cream cheese mixture in frozen pie crust. Carefully spoon sweet potato mixture over cream cheese mixture.", "Step 3: Bake on cookie sheet 50 to 60 minutes or until set and knife inserted near center comes out clean. Cool 30 minutes. Refrigerate until chilled, 3 to 4 hours. Serve pie with sweetened whipped cream. Store covered in refrigerator. "]
  },{
    "title":"Healthy Taco Salad",
  "mealType": "Entree",
  "servingSize": 2,
  "difficultyLevel": "easy",
  "imagePath": "https://www.wellplated.com/wp-content/uploads/2017/04/Skinny-Taco-Salad-recipe.jpg",
  "ingredients": ["Flour Tortillas", "Spices", "Ground Turkey", "Romaine Lettuce", "Black Beans", "Corn", "Tomatoes", "Avocado", "Cilantro + Green Onions", "Cheddar Cheese", "Salsa"],
  "direction": ["Step 1: Bake the tortilla strips: Coat a baking sheet with nonstick spray. Cut the tortillas into strips, drizzle with oil, and sprinkle with salt and pepper. Toss to coat, and bake at 425 degrees F until golden.", "Step 2: In a large skillet, heat oil over medium high. Add the turkey and spices, stirring to coat. In a bowl, stir together dressing ingredients.", "Step 3: Place the romaine in a serving bowl, add the salad ingredients, and top with the dressing. Toss to combine, sprinkle with tortilla strips, and serve."]
},{
    "title":"Butter-Basted, Pan Seared Rib-Eye Steak",
  "mealType": "Entree",
  "servingSize": 1,
  "difficultyLevel": "hard",
  "imagePath": "https://www.thespruceeats.com/thmb/kvDdJvWZmNA9iw2XkNsGoY04WAo=/2048x1365/filters:fill(auto,1)/butter-basted-rib-eye-steak-912505-9_preview-5b2bc55a1d6404003699d69a.jpeg",
  "ingredients": ["1 (2-inch thick) rib-eye (or strip steak)", "Kosher salt", "8 tablespoons unsalted butter"],
  "direction": ["Step 1: At least two hours before cooking, remove the steak from refrigerator and salt it liberally on both sides.", "Step 2: When ready to cook, heat a heavy cast iron skillet over medium-high until the handle is very warm and a drop of water bounces in the pan. (Although cast iron is best because of its heat retention, any heavy-bottomed skillet will work. The pan should be large enough to hold the steak with enough extra space to get a basting spoon alongside the steak.) Depending on your cooktop, the size of the pan, and how you want your steak cooked, this might take five to 20 minutes.​", "Step 3: Pat the steak dry. When the pan is hot, place the steak on one of its edges in the pan. Cook for one minute, then rotate to another edge. Continue until the entire circumference of the steak is seared."]
}]
  constructor() { }

  ngOnInit(): void {
    
  }

}
