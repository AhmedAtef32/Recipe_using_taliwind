import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductComponent } from "../../product/product/product.component";
import { MeetServiceService } from '../../../services/meals_Services/meals-service.service';
import { AllMeals } from '../../../interfaces/all-meals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meals',
  imports: [ProductComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit , OnDestroy {

  _meetServiceService= inject(MeetServiceService)

  allMeals:AllMeals[] =[]

  subMelas!:Subscription
  ngOnInit(): void {
    this.getAllMelas()
   }

   getAllMelas(){
     this.subMelas = this._meetServiceService.getMeetData().subscribe({
      next : (res) => this.allMeals = res.meals ,
      error : (err) => console.log(err),
    })
   }
   ngOnDestroy(){
    this.subMelas.unsubscribe();
   }


}
