import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsByNameService } from '../../../services/mealsByName/meals-by-name.service';
import { MealsByName } from '../../../interfaces/meals-by-name';
import { Subscription } from 'rxjs';
import { ProductsByNameComponent } from "../../products-by-name/products-by-name.component";

@Component({
  selector: 'app-break-fast',
  imports: [ProductsByNameComponent],
  templateUrl: './break-fast.component.html',
  styleUrl: './break-fast.component.scss'
})
export class BreakFastComponent implements OnInit , OnDestroy {

 private readonly  _mealsByNameService= inject(MealsByNameService);

  allMeals: MealsByName[] = [];

  allmeals !: MealsByName[]
   subGetdata!: Subscription;

   ngOnInit(): void {
     this.getdata()
   }
    getdata(){
      this.subGetdata = this._mealsByNameService.getMealsByName("Breakfast").subscribe({
        next : (res) => this.allmeals = res.meals,
        error : (err) => console.log(err)
      })
    }

    ngOnDestroy(): void {
      this.subGetdata.unsubscribe()
    }
}
