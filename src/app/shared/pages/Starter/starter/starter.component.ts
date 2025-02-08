import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsByNameService } from '../../../services/mealsByName/meals-by-name.service';
import { MealsByName } from '../../../interfaces/meals-by-name';
import { Subscription } from 'rxjs';
import { ProductsByNameComponent } from "../../products-by-name/products-by-name.component";

@Component({
  selector: 'app-starter',
  imports: [ProductsByNameComponent],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss'
})
export class StarterComponent implements OnInit , OnDestroy {
  private readonly _mealsByNameService = inject(MealsByNameService)

    allmeals !: MealsByName[]
   subGetdata!: Subscription;

   ngOnInit(): void {
     this.getdata()
   }

    getdata(){
      this.subGetdata = this._mealsByNameService.getMealsByName("Starter").subscribe({
        next : (res) => this.allmeals = res.meals,
        error : (err) => console.log(err)
      })
    }

    ngOnDestroy(): void {
      this.subGetdata.unsubscribe()
    }

}
