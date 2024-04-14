import { Component, Output,EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';



interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
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
