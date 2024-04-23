import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('accessToken');
  this.router.navigate(['/']);

}
navigateTobuydog() {
  this.router.navigate(['/dashboard/buydog']);

}
navigateToAdddog(){
  this.router.navigate(['/dashboard/adddog']);

}
Accessories(){
  this.router.navigate(['/dashboard/accessories']);

}
}
