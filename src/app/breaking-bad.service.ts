import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  constructor(private http: HttpClient) { }
  getCharacter(): Observable<any> {
    return this.http.get(environment.apiUrl + '/character/random')
  }
  getQuote(): Observable<any> {
    return this.http.get(environment.apiUrl + '/quote/random')
  }
}
