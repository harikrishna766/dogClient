import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   user:any= { }
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  signup(data:any) { 
    console.log(data,'-----------data')
    this.service.registerDetails(data).subscribe((result:any)=>{
      if(result){
        alert("Successfully Registred")
        this.router.navigate(['/'])
      }
    }),
    (error:any)=>{
      alert(error.error.message)
    }

  }
}
