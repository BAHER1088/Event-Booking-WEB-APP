import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AllEventsComponent } from './components/all-events/all-events.component';
import { CardComponent } from './components/card/card.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/event-details', pathMatch: 'full' },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
    { path: 'all-events', component: AllEventsComponent },
    { path: 'card', component: CardComponent },
    { path: 'event-details', component: EventDetailsComponent },
    // { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '/home' }
];