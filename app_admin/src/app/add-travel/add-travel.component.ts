import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router"; 
import { TravelDataService } from '../services/travel-data.service'; 

@Component({ 
  selector: 'app-add-tavel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-travel.component.html',
  styleUrl: './add-travel.component.css'     
})

export class AddTravelComponent implements OnInit {
   public addForm!: FormGroup; 
   submitted = false;
   
   constructor( 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private travelService: TravelDataService 
  ) { }
   
  //this is super wasteful. not dry. We have defined the shape of the data in like 3 places at this point.
  ngOnInit() { 
    this.addForm = this.formBuilder.group({ 
      _id:         [],
      code:        ['', Validators.required],
      name:        ['', Validators.required],
      length:      ['', Validators.required],
      start:       ['', Validators.required],
      resort:      ['', Validators.required],
      perPerson:   ['', Validators.required], 
      image:       ['', Validators.required], 
      description: ['', Validators.required], 
    }) 
  } 
  
  public onSubmit() { 
    this.submitted = true; 
    if(this.addForm.valid){ 
      this.travelService.addTravels(this.addForm.value)
      .subscribe( {
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['']); 
      },
      error: (error: any) => {
        console.log('Error: ' + error); 
      }}); 
    } 
  } 
  
  // get the form short name to access the form fields 
  get f() { 
    return this.addForm.controls; 
  } 
}