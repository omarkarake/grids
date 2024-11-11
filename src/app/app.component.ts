import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sidebarToggled: boolean = false;
  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }
  title = 'grids';
}
