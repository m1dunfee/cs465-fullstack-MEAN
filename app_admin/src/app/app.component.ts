import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { TravelListingComponent } from './travel-listing/travel-listing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule], //TravelListingComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Admin';
}
