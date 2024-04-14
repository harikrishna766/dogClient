import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  getRole() {
    console.log(localStorage.getItem('result')  );
    return localStorage.getItem('result');
  }
  addDog(data: any) {
    let url = 'http://localhost:4050/api/v1/user/adddog';
    return this.http.post(url, data);
  }
  getdog() {
    let url = 'http://localhost:4050/api/v1/user/getallDog';
    return this.http.post(url,'data');
  }
}
