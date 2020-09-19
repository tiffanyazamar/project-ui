import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaintenanceTComponent } from './maintenance-t/maintenance-t.component';

export const AppRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  { path: 'events', component: EventsComponent },
  { path: 'user', component: UserComponent },
  { path: 'tickets', component: MaintenanceTComponent },
 
  {
    path: '**',
    redirectTo: 'home'
  }
]
