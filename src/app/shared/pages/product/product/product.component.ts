import { Component, Input, input } from '@angular/core';
import { AllMeals } from '../../../interfaces/all-meals';
import { MealsByName } from '../../../interfaces/meals-by-name';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input({required: true}) allMeals!: AllMeals[] ;



}
