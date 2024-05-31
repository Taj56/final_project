import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    
  }

  resgiterUser(formData: NgForm){
    this.authService.registerUser(formData.value).subscribe({
      next: (registerRes)=>{
        if(registerRes['status'] == 'success'){
          this.router.navigateByUrl('/login');
        }
      }
    })
  }

}
