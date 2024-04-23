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
    let url = 'http://localhost:4050/api/v1/user/getallDog/';
    return this.http.post(url,'data');
  }
  getsinglerecord(id:any){
    let url = `http://localhost:4050/api/v1/user/singlerecord/${id}`;
    console.log(id,'id=====================')

    return this.http.post(url,id);

  }
  Buyproduct(data:any){
    let url = 'http://localhost:4050/api/v1/user/buyProduct/';
    return this.http.post(url,data);
  }
  addcart(data:any){
    let url = 'http://localhost:4050/api/v1/user/addCartProducts/';
    return this.http.post(url,data);
  }
  allBuyproductslist(){
    let url = 'http://localhost:4050/api/v1/user/allbuyProductdetails/';
    return this.http.post(url,"data");
  }
  alladdcartproductslist(){
    let url = 'http://localhost:4050/api/v1/user/alladdcartdetails/';
    return this.http.post(url,'data');
  }

}
