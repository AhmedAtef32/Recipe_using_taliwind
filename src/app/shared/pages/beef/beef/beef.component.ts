import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductComponent } from "../../product/product/product.component";
import { MealsByNameService } from '../../../services/mealsByName/meals-by-name.service';
import { Subscription } from 'rxjs';
import { MealsByName } from '../../../interfaces/meals-by-name';
import { ProductsByNameComponent } from "../../products-by-name/products-by-name.component";

@Component({
  selector: 'app-beef',
  imports: [ ProductsByNameComponent],
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.scss'
})
export class BeefComponent implements OnInit , OnDestroy {

 private readonly _mealsByNameService = inject(MealsByNameService)

  allmeals !: MealsByName[]
 subGetdata!: Subscription;

 ngOnInit(): void {
   this.getdata()
 }

  getdata(){
    this.subGetdata = this._mealsByNameService.getMealsByName("beef").subscribe({
      next : (res) => this.allmeals = res.meals,
      error : (err) => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.subGetdata.unsubscribe()
  }
}
