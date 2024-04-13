import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={}
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  login (data:any) {
    this.service.login(data).subscribe((result: any) => {
      if (result.status === 200) {
        console.log(result)
        localStorage.setItem('accessToken', result.token);
        localStorage.setItem('result', result.userData.roleType);
        this.router.navigate(['/dashboard']);
      } else if (result.status === 401) {
        alert('not valid password');
      } else {
        alert('not valid details');
      }
    });
  }
}
