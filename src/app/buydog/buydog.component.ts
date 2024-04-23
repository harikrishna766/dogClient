import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buydog',
  templateUrl: './buydog.component.html',
  styleUrls: ['./buydog.component.css']
})
export class BuydogComponent implements OnInit {
  result:any=[]
  image='http://localhost:4050/photos/'
  Data1: any=[];
  values: any;
  constructor(private router: Router,private service:ServiceService ,private Active:ActivatedRoute) { }

  ngOnInit(): void {
    this.onsubmit()
  }
logout(){
  localStorage.removeItem('accessToken');
  this.router.navigate(['/']);

}
navigateToAdddog(){
  this.router.navigate(['/dashboard/adddog']);

}
navigateTobuydog(){
  this.router.navigate(['/dashboard/buydog']);

}
onsubmit(){
this.service.getdog().subscribe((res:any)=>{
  this.result=res.usersData
  console.log(this.result,'resultresultresult')
})
}
navigateeTobuydog(id:any) {
  this.router.navigate(['/dashboard/buydogproducts',id]);
console.log(id,'id=====================')
}

navigateToBuyProductsList(){
  this.router.navigate(['/dashboard/allbuyproductdetails']);
  Swal.fire({
    title: "sucess!",
    text:" Successfully getting BuyProductDetailsList",
    icon: "success"
  });

}
navigateTocartDetails(){
  this.router.navigate(['/dashboard/allcartdetails']);
  Swal.fire({
    title: "sucess!",
    text: "  Successfully getting cartdetails!",

    icon: "success"
  });

}
navigateeToModify(){

}
//  constvalues = [this.result._id, this.result.breed, this.result.price, 'image' + this.result.imagePath];
//  thvalues = {
//   breed: this.result.breed,
//   price: this.result.price,
//   imagePath: 'image' + this.result.imagePath
// };
onsubmitaddcart(data: any) {
  this.service.addcart(data).subscribe((res: any) => {
    this.Data1 = res;
    console.log(this.Data1, 'oooooooooooooooooo');
    console.log('Adding to cart:', data._id, data.breed, data.price, 'image' + data.imagePath);

    if(this.Data1.status==200){
    Swal.fire({
      title: "sucess!",
      text: " Add Successfully!",
      icon: "success"
    });
  }
  })
}
Accessories(){
  this.router.navigate(['/dashboard/accessories']);

}
}


