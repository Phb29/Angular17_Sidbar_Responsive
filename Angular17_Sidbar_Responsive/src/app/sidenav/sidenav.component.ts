import { Component, Output,EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
 @Output() ontoggleCollapse: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth=0;
  collapsed = false;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  this.ontoggleCollapse.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() {
    this.collapsed = false;
  this.ontoggleCollapse.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }
}
