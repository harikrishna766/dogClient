import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashdoard',
  templateUrl: './dashdoard.component.html',
  styleUrls: ['./dashdoard.component.css']
})
export class DashdoardComponent implements OnInit {

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
}