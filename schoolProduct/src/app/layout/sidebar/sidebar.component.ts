import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus = [
    { name: 'Schools', path: 'schools' },
    { name: 'Departments', path: 'departments' },
    { name: 'Class', path: 'classes' }
  ]

  @ViewChild('sidenav') sideNav: MatSidenav; // used to get the ref var of current component

  @Input() set sidebarCollaps(value: boolean) {
    this.sideNav.toggle(value);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
