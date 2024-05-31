import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    
  }

  hasError?: boolean;
  errorMsg?: string;

  login(loginForm: NgForm){
    this.authService.loginAuth(loginForm.value).subscribe({
      next: (loginRes)=>{
        if(loginRes['status'] == 'success'){
          this.hasError = false;

          this.authService.authToken = loginRes['data']!['token'];
          this.authService.saveAuthToken();
          this.authService.getCurrentUser(()=>{
            this.authService.loginState = true;
          })

          this.router.navigateByUrl('/all-reports')

        }
      },

      error: (error) =>{
        console.log(error.error.message);

        this.hasError = true;
        this.errorMsg = error.error['message'];
        this.authService.loginState = false;
      },

      complete: ()=>{}
    })
  }

}
