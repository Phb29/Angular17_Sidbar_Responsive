import { Component, Output,EventEmitter, OnInit, HostListener } from '@angular/core';
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
export class SidenavComponent implements OnInit{
@HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.ontoggleCollapse.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

 ngOnInit(): void {
  if (typeof window !== 'undefined') {
    this.screenWidth = window.innerWidth;
  }
 }
 @Output() ontoggleCollapse: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
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
