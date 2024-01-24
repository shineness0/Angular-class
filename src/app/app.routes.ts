import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', redirectTo: '', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', children: [
    {path: '', component: ProfileComponent}
  ]},
  {path: 'profile/:id', component: ProfileComponent},
  {path: '**', component: NotfoundComponent}
];
