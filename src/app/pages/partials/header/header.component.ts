import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){}
  
  // islog: boolean = false;

  ngOnInit(): void {
    // this.checkLog()
  }

  // checkLog(){
  //   if(this.authService.isLoggedIn()){
  //     this.islog = true;
  //   }else {
  //     this.islog = false;
  //   }
  // }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('')
  }

}
