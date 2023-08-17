import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  loginUser(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }

  registerUser(newUser: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, newUser);
  }

}
