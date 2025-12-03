import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TravelDataService } from '../services/travel-data.service';
import { Travel } from '../models/travel';

@Component({
  selector: 'app-edit-travel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-travel.component.html',
  styleUrl: './edit-travel.component.css'
})
export class EditTravelComponent implements OnInit {
  public editForm!: FormGroup;
  travel!: Travel;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private travelDataService: TravelDataService
  ) {}

  ngOnInit(): void {
    let travelCode = localStorage.getItem("travelCode");
    
    if (!travelCode) {
      alert("Something wrong, couldn't find where I stashed travelCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EdittravelComponent::ngOnInit');
    console.log('travelcode:' + travelCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [travelCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.travelDataService.getTravel(travelCode)
      .subscribe({
        next: (value: any) => {
          this.travel = value;
          // Populate our record into the form
          this.editForm.patchValue(value[0]);
          
          if (!value) {
            this.message = 'No Travel Retrieved!';
          } else {
            this.message = 'Travel: ' + travelCode + ' retrieved';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  public onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.travelDataService.updateTravel(this.editForm.value)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
        });
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }
}