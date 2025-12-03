import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { Travel } from '../models/travel'

@Component({
  selector: 'app-travel-card',
  imports: [CommonModule],
  templateUrl: './travel-card.component.html',
  styleUrl: './travel-card.component.css'
})
export class TravelCardComponent implements OnInit{
  
  @Input('travel') travel: any;

  constructor(private router: Router){}

  ngOnInit(): void {
  
  }

  public editTravel(travel: Travel) {
    localStorage.removeItem('travelCode');
    localStorage.setItem('travelCode', travel.code);
    this.router.navigate(['edit-travel']);
  }
  
}
