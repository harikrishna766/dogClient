import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newadd',
  templateUrl: './newadd.component.html',
  styleUrls: ['./newadd.component.css']
})
export class NewaddComponent implements OnInit {

  data:any={}
  selectedfile:any;
  constructor(private router: Router,private service:ServiceService) { }

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

onFileSelected(event:any){
this.selectedfile=event.target.files[0] as File
}

submitForm(data:any){
if(this.selectedfile){
  const formdata=new FormData()
  formdata.append('image',this.selectedfile)
  formdata.append('user',JSON.stringify(data))

this.service.addDog(formdata).subscribe((result:any)=>{
 if(result.status==400){
  Swal.fire({
    text:"please Enter Details all fields",
    icon: 'error',
    showCancelButton: true
   });
  }
  else if(result.status==200){
  Swal.fire({
    title: "Good job!",
    text: "Add New Dogs Details Successfully!",
    icon: "success"
  });
  this.data = {};

}


})
}
}
Accessories(){
  this.router.navigate(['/dashboard/accessories']);

}
}


