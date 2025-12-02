import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-travel-card',
  imports: [CommonModule],
  templateUrl: './travel-card.component.html',
  styleUrl: './travel-card.component.css'
})
export class TravelCardComponent implements OnInit{
  @Input('travel') travel: any;

  constructor(){}

  ngOnInit(): void {
    
  }
}
