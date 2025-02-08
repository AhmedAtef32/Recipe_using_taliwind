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
import { NotFoundComponent } from './Feature/pages/not-found/not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent  , children:[
    {path: '', redirectTo: 'meals', pathMatch: 'full'},
    {path: 'meals', component: MealsComponent ,title: 'All Meals'},
    {path: 'Beef', component: BeefComponent ,title: 'Beef'},
    {path: 'Breakfast', component: BreakFastComponent,title: 'Breakfast'},
    {path: 'Chicken', component: ChickenComponent,title: 'Chicken'},
    {path: 'Dessert', component: DessertComponent,title: 'Dessert'},
    {path: 'Goat', component: GoatComponent,title: 'Goat'},
    {path: 'Lamb', component: LambComponent,title: 'Lamb'},
    {path: 'Miscellaneous', component: MiscellaneousComponent,title: 'Miscellaneous'},
    {path: 'Seafood', component: SeaFoodComponent,title: 'Seafood'},
    {path: 'Side', component: SideComponent,title: 'Side'},
    {path: 'Starter', component: StarterComponent,title: 'Starter'},
    {path: 'Vegan', component: VeganComponent,title: 'Vegan'},
    {path: 'vegetarian', component: VegetarianComponent,title: 'vegetarian'},
  ]},
  {path: 'Details', component: DetailsComponent},
  {path: '**', component: NotFoundComponent},

];
