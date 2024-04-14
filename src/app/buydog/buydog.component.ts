import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-buydog',
  templateUrl: './buydog.component.html',
  styleUrls: ['./buydog.component.css']
})
export class BuydogComponent implements OnInit {
  result:any=[]
  image='http://localhost:4050/photos/'
  constructor(private router: Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.onsubmit()
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
onsubmit(){
this.service.getdog().subscribe((res:any)=>{
  this.result=res.usersData
  console.log(this.result,'resultresultresult')
})
}
}

