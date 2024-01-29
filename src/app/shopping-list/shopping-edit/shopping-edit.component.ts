import { Component, ElementRef, Output,EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
   @ViewChild('nameInput') nameInputRef:ElementRef;
   @ViewChild('amountInput') amountInputRef:ElementRef;
   constructor(private slService:ShoppingService){

  }
  ngOnInit() {
       
   }
   onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient); 
  }
}
