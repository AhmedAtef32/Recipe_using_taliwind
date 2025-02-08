import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink,RouterLinkActive ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  private readonly  _router =inject(Router)

 categorys: string[] =[
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "vegetarian",
 ];

 inputValue!: string;

@ViewChild('search') inputSearch!:ElementRef ;

 @HostListener('input')
 getInputValue(): void {
  this.inputValue = this.inputSearch.nativeElement.value;
  this._router.navigate(["Home/" + this.inputValue])
}

}

