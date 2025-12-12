import { Routes } from '@angular/router';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { TravelListingComponent } from './travel-listing/travel-listing.component';
import { EditTravelComponent } from './edit-travel/edit-travel.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'add-travels', component: AddTravelComponent},
    { path: 'edit-travel', component: EditTravelComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: TravelListingComponent, pathMatch: 'full'}
];
