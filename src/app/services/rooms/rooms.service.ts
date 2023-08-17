import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }

}
