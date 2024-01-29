import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  ingredients:Ingredient[];
  private igChangedSubt:Subscription;
  constructor(private slService:ShoppingService){}
  ngOnInit() {
      this.ingredients=this.slService.getIngredients();
      this.igChangedSubt=this.slService.ingredientsChanged.subscribe(
        (ingredients:Ingredient[])=>{
          this.ingredients=ingredients;
        }
      );
    }
    ngOnDestroy(): void {
        this.igChangedSubt.unsubscribe();
    }
}
