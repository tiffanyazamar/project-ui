import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home',         title: 'Home',        icon:'fas fa-home',    class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/events', title: 'Events', icon: 'nc-diamond', class: '' },
    { path: '/tickets', title: 'Maintenance Tickets', icon: 'nc-pin-3', class: '' },
    { path: '/lease', title: 'Lease Management', icon: 'nc-bell-55', class: '' },
    { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
