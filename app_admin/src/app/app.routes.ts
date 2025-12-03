import { Routes } from '@angular/router';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { TravelListingComponent } from './travel-listing/travel-listing.component';
// import { EditTravelComponent } from 

export const routes: Routes = [
    { path: 'add-travels', component: AddTravelComponent},
    { path: '', component: TravelListingComponent, pathMatch: 'full'}
];
