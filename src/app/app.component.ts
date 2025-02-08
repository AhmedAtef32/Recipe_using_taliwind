import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './shared/services/flowbite.service';
import { SidebarComponent } from "./core/layout/sidebar/sidebar.component";
import { FooterComponent } from "./core/layout/footer/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Sass_task';
  private readonly  _flowbiteService = inject(FlowbiteService);


  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
    });
  }
}
