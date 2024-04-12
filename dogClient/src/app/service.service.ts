import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  registerDetails(data: any) {
    let url = 'http://localhost:4050/api/v1/login/register';
    return this.http.post(url, data);
  }

  login(data: any) {
    let url = 'http://localhost:4050/api/v1/login/login';
    return this.http.post(url, data);
  }
  logintaken() {
    return localStorage.getItem('accessToken');
  }
}
