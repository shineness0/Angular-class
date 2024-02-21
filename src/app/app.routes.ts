import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { privateRouteGuard } from './guards/private-route.guard';
import { TemplateDrivenFormComponent } from './pages/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { BehaviourSubjectParentComponent } from './pages/behaviour-subject-parent/behaviour-subject-parent.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { EventParentComponent } from './pages/event-parent/event-parent.component';

export const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'template-form', component:TemplateDrivenFormComponent},
  {path: 'reactive-form', component:ReactiveFormComponent},
  {path: 'behaviour-subject', component: BehaviourSubjectParentComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'event-emmiter', component: EventParentComponent},
  {path: 'dashboard', children: [
    {path: '', component: DashboardComponent},
    {path: 'profile', component: ProfileComponent}
  ], canActivate: [privateRouteGuard]},
  {path: 'profile/:id', component: ProfileComponent},
  {path: '**', component: NotfoundComponent},
];
