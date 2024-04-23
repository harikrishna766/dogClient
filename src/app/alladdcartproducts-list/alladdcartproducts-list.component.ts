import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alladdcartproducts-list',
  templateUrl: './alladdcartproducts-list.component.html',
  styleUrls: ['./alladdcartproducts-list.component.css']
})
export class AlladdcartproductsListComponent implements OnInit {
  image='http://localhost:4050/photos/'
result:any=[]
a: any;
  constructor(private service:ServiceService,private rout:Router) { }

  ngOnInit(): void {
    this.onsubmit()
    console.log('allcartdetails')
  }
onsubmit(){
  this.service.alladdcartproductslist().subscribe((res:any)=>{
    this.result=res.usersData
    console.log(this.result,'resultresultresult')
  })
}

cancel(){
  this.rout.navigate(['/dashboard/buydog'])
}
delete(){
  
}
}
