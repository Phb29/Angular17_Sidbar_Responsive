import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  collapse = false;
  navData = navbarData;
  
  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  closeSidenav() {
    this.collapse = false;
  }
}
