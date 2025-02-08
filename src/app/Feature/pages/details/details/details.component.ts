import { Subscription } from 'rxjs';
import { ProductByIDService } from './../../../../shared/services/productById/product-by-id.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit , OnDestroy {

private readonly  _productByIDService = inject(ProductByIDService);

subGetProduct !: Subscription;

 meal !: any;
  // getproduct(){
  // this.subGetProduct=  this._productByIDService.getProductById().subscribe({
  //     next:(res)=>{
  //       this.meal =res.meals;
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }


  ngOnInit(): void {
    // this.getproduct();
  }

  ngOnDestroy(): void {
    // this.subGetProduct.unsubscribe();
  }
}
