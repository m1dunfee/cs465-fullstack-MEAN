import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Travel } from '../models/travel'

@Injectable({
  providedIn: 'root'
})
export class TravelDataService {

  constructor(private http: HttpClient) { }

  getTravels() : Observable<Travel[]> {
    let url = 'http://localhost:3000/api/travel'

    return this.http.get<Travel[]>(url);
  }
}
