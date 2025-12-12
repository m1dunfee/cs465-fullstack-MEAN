import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCardComponent } from '../travel-card/travel-card.component';
import { Travel } from '../models/travel';
import { TravelDataService } from '../services/travel-data.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-travel-listing',
  imports: [CommonModule, TravelCardComponent],
  templateUrl: './travel-listing.component.html',
  styleUrl: './travel-listing.component.css',
  providers: [TravelDataService]
})
export class TravelListingComponent implements OnInit {
  // travels: Array<any> = travels;
  travels!: Travel[];
  message: string = '';

  constructor(
    private travelDataService: TravelDataService, 
    private router: Router, 
    private authenticationService: AuthenticationService) {
    console.log('travel-listing Constructor')
  }

  public addTravels(): void{
    this.router.navigate(['add-travels'])
  }
  
  private getStuff(): void {
    this.travelDataService.getTravels().subscribe({
      next: (value:any) => {
        this.travels = value;
        if(value.length > 0){
          this.message = 'There are ' + value.length + ' travel available.';
        }else{
          this.message = 'There were no travels retireved from the database';
        }
        console.log(this.message)
      },
      error: (error: any) => {
        console.log('Error: '+error);
      }
    })
  }

  ngOnInit(): void {
    console.log('ngOnIntit')
    this.getStuff();

  }

  public isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }
}
