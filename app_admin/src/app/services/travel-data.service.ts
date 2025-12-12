import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Travel } from '../models/travel'

@Injectable({
  providedIn: 'root'
})
export class TravelDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  url = 'http://localhost:3000/api/travel';
  baseUrl = 'http://localhost:3000/api';

  getTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.url);
  }

  addTravels(formData: Travel): Observable<Travel> {
    return this.http.post<Travel>(this.url, formData)
  }

  getTravel(travelCode: string): Observable<Travel[]> {
    //console.log('inside getTravel);
    return this.http.get<Travel[]>(this.url + '/' + travelCode);
  }

  updateTravel(formData: Travel): Observable<Travel> {
    //console.log('inside getTravel);
    return this.http.put<Travel>(this.url + '/' + formData.code, formData);
  }

  // Call to our /login endpoint, returns JWT 
  login(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::register');
    return this.handleAuthAPICall('register', user, passwd);
  }

  // helper method to process both login and register methods 
  handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::handleAuthAPICall'); 
    let formData = { 
      name: user.name, 
      email: user.email, 
      password: passwd 
    };
    
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }
}
