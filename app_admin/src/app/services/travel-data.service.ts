import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Travel } from '../models/travel'

@Injectable({
  providedIn: 'root'
})
export class TravelDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/travel';

  getTravels() : Observable<Travel[]> {
    return this.http.get<Travel[]>(this.url);
  }

  addTravels(formData: Travel) : Observable<Travel>{
    return this.http.post<Travel>(this.url, formData)
  }

  getTravel(travelCode: string) : Observable<Travel[]>{
    //console.log('inside getTravel);
    return this.http.get<Travel[]>(this.url + '/' + travelCode);
  }

  updateTravel(formData: Travel) : Observable<Travel>{
    //console.log('inside getTravel);
    return this.http.put<Travel>(this.url + '/' + formData.code, formData);
  }
}
