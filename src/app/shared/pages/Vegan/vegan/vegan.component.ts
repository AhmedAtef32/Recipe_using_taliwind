import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsByName } from '../../../interfaces/meals-by-name';
import { MealsByNameService } from '../../../services/mealsByName/meals-by-name.service';
import { Subscription } from 'rxjs';
import { ProductsByNameComponent } from "../../products-by-name/products-by-name.component";

@Component({
  selector: 'app-vegan',
  imports: [ProductsByNameComponent],
  templateUrl: './vegan.component.html',
  styleUrl: './vegan.component.scss'
})
export class VeganComponent implements OnInit , OnDestroy{

  private readonly _mealsByNameService = inject(MealsByNameService)

    allmeals !: MealsByName[]
   subGetdata!: Subscription;

   ngOnInit(): void {
     this.getdata()
   }

    getdata(){
      this.subGetdata = this._mealsByNameService.getMealsByName("vegan").subscribe({
        next : (res) => this.allmeals = res.meals,
        error : (err) => console.log(err)
      })
    }

    ngOnDestroy(): void {
      this.subGetdata.unsubscribe()
    }
}
