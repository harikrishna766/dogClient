import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buydogproduts',
  templateUrl: './buydogproduts.component.html',
  styleUrls: ['./buydogproduts.component.css']
})
export class BuydogprodutsComponent implements OnInit {
  Data:any={};
  Data1:any=[]
  data:any={};
  selectedfile:any;
  image='http://localhost:4050/photos/'
  event: any;


  constructor(private service:ServiceService,private route:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    console.log(this.service.getsinglerecord(this.route.snapshot.params['id']),'---------------------------')

    this.getrecordDetails()
  }
getrecordDetails(){
  this.service.getsinglerecord(this.route.snapshot.params['id']).subscribe((res:any)=>{
    console.log(res,'pppppppp')
    this.Data=res.data
    this.Data1=this.Data.imagePath
    console.log(this.Data1,'ppppppppppppp')
  })

}

  submitForm(data:any){
  this.service.Buyproduct(this.Data).subscribe((result:any)=>{
    console.log(result.status)
    if (result.status == 400) {
      console.log("Entering error block");
      Swal.fire({
        title: 'Please Enter Address and PhoneNumber',
        icon: 'error',
        showCancelButton: true
      });
    }

 if(result.status==200){
    Swal.fire({
      title: "Great!",
      text: " Buying New Dog Successfully!",
      icon: "success"
    });
this.rout.navigate(['/dashboard/buydog'])
  }


  })
  }
  addcart(data:any){
this.service.addcart(this.Data).subscribe((result:any)=>{

  if (result.status == 200) {
  Swal.fire({
    title: "Great!",
    text: "Add Product Successfully!",
    icon: "success"
  });
}
})
  }

  cancel(){
    this.rout.navigate(['dashboard/buydog']);
  }
  modify(){
    
  }
  }

