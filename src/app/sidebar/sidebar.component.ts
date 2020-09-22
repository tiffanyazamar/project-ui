import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthService } from 'app/auth.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/ourTeam', title: 'Our Team', icon: 'fas fa-users', class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'fas fa-table', class: '' },
    { path: '/events', title: 'Events', icon: 'fas fa-calendar-alt', class: '' },
    { path: '/tickets', title: 'Maintenance Tickets', icon: 'fas fa-clipboard-list', class: '' },
    { path: '/lease', title: 'Lease Management', icon: 'fas fa-file-signature', class: '' },
    { path: '/user', title: 'User Profile', icon: 'fas fa-cogs', class: '' },
    { path: '/logout',    title: 'Logout',        icon:'fas fa-sign-out-alt', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit, OnChanges {
    @Input() loggedInUser: any;

    public menuItems: any[];
    loggedIn = false;
    constructor() { }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (this.loggedInUser) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }
    ngOnChanges() {
        this.ngOnInit();
    }
}
