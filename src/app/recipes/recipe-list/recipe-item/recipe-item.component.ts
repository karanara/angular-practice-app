import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import { Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(){

  }
  ngOnInit() {
      
  }

  onSelected(){
    console.log("recipe selected")
    this.recipeSelected.emit(this.recipe);
  }
}
