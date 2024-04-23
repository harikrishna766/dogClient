import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allbuyproducts-list',
  templateUrl: './allbuyproducts-list.component.html',
  styleUrls: ['./allbuyproducts-list.component.css']
})
export class AllbuyproductsListComponent implements OnInit {

  image='http://localhost:4050/photos/'
result:any=[]
constructor(private service:ServiceService , private rout:Router) { }

  ngOnInit(): void {
this.onsubmit()
console.log('allBuyproductlist=========')
  }
onsubmit(){
  this.service.allBuyproductslist().subscribe((res:any)=>{
    this.result=res.usersData
    console.log(this.result,'resultresultresult')
  })
}
  cancel(){
    this.rout.navigate(['/dashboard/buydog'])

  }
}
