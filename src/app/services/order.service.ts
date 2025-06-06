import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://localhost:7028/api/status';
  private loginUrl = 'https://localhost:7028/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password });
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  getOrderDetails(orderId: number): Observable<any> {
    debugger; // This line is for debugging purposes, you can remove it in production
    const token = this.getToken();
    const headers = token
      ? new HttpHeaders({ 'Authorization': `Bearer ${token}` })
      : undefined;
    return this.http.get(`${this.apiUrl}/${orderId}`, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.removeItem('jwt_token');
          this.router.navigate(['/']);
        }
        return throwError(() => error);
      })
    );
  }
}