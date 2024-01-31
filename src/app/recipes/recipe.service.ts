import {  Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
    recipesChanged= new Subject<Recipe[]>()
   private recipes:Recipe[]=[
        new Recipe('A test Recipe',
        'This is simple',
        'https://www.eatingwell.com/thmb/Z30Dnoxft_c8dwJzKakVpJuuqJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-garlic-skillet-chicken-with-spinach-7fb96b8ced6b4075b61b01d5d308f73b.jpg',
        [new Ingredient('Meat',1),new Ingredient('French Fries',20)]),
        new Recipe('A test11 Recipe',
        'This is not simple',
        'https://www.eatingwell.com/thmb/Z30Dnoxft_c8dwJzKakVpJuuqJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-garlic-skillet-chicken-with-spinach-7fb96b8ced6b4075b61b01d5d308f73b.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Breads',4)
        ])
       ];
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    constructor(private slService:ShoppingService){

    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
    addRecipe(recipe:Recipe){

        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number,newRecipe:Recipe){

        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    addIngredientsToShopList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}