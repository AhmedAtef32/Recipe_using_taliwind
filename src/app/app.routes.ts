import { DetailsComponent } from './Feature/pages/details/details/details.component';
import { Routes } from '@angular/router';
import { CategoryComponent } from './Feature/pages/category/category/category.component';
import { HomeComponent } from './Feature/pages/Home/home/home.component';
import { BeefComponent } from './shared/pages/beef/beef/beef.component';
import { MealsComponent } from './shared/pages/meals/meals/meals.component';
import { BreakFastComponent } from './shared/pages/BreakFast/break-fast/break-fast.component';
import { ChickenComponent } from './shared/pages/Chicken/chicken/chicken.component';
import { DessertComponent } from './shared/pages/Dessert/dessert/dessert.component';
import { GoatComponent } from './shared/pages/Goat/goat/goat.component';
import { MiscellaneousComponent } from './shared/pages/Miscellaneous/miscellaneous/miscellaneous.component';
import { LambComponent } from './shared/pages/Lamb/lamb/lamb.component';
import { SeaFoodComponent } from './shared/pages/Seafood/sea-food/sea-food.component';
import { SideComponent } from './shared/pages/side/side/side.component';
import { StarterComponent } from './shared/pages/Starter/starter/starter.component';
import { VeganComponent } from './shared/pages/Vegan/vegan/vegan.component';
import { VegetarianComponent } from './shared/pages/vegetarian/vegetarian/vegetarian.component';

export const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent , children:[
    {path: '', redirectTo: 'meals', pathMatch: 'full'},
    {path: 'meals', component: MealsComponent},
    {path: 'Beef', component: BeefComponent},
    {path: 'Breakfast', component: BreakFastComponent},
    {path: 'Chicken', component: ChickenComponent},
    {path: 'Dessert', component: DessertComponent},
    {path: 'Goat', component: GoatComponent},
    {path: 'Lamb', component: LambComponent},
    {path: 'Miscellaneous', component: MiscellaneousComponent},
    {path: 'Seafood', component: SeaFoodComponent},
    {path: 'Side', component: SideComponent},
    {path: 'Starter', component: StarterComponent},
    {path: 'Starter', component: StarterComponent},
    {path: 'Vegan', component: VeganComponent},
    {path: 'vegetarian', component: VegetarianComponent},
  ]},
  {path: 'Details', component: DetailsComponent},

];
