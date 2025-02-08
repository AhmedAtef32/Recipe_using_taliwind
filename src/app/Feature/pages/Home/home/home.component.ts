import { Component } from '@angular/core';
import { CategoryComponent } from "../../category/category/category.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CategoryComponent , RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
