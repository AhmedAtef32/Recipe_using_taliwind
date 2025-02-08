import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MealsByName } from '../../../interfaces/meals-by-name';
import { Subscription } from 'rxjs';
import { MealsByNameService } from '../../../services/mealsByName/meals-by-name.service';
import { ProductsByNameComponent } from "../../products-by-name/products-by-name.component";

@Component({
  selector: 'app-goat',
  imports: [ProductsByNameComponent],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.scss'
})
export class GoatComponent implements OnInit,OnDestroy {

private readonly _mealsByNameService = inject(MealsByNameService)

  allmeals !: MealsByName[]
 subGetdata!: Subscription;

 ngOnInit(): void {
   this.getdata()
 }
  getdata(){
    this.subGetdata = this._mealsByNameService.getMealsByName("Goat").subscribe({
      next : (res) => this.allmeals = res.meals,
      error : (err) => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.subGetdata.unsubscribe()
  }

}
