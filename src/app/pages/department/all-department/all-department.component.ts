import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-all-department',
  templateUrl: './all-department.component.html',
  styleUrls: ['./all-department.component.css']
})
export class AllDepartmentComponent implements OnInit{

  constructor(private departmentService: DepartmentService, private router: Router, private route: ActivatedRoute){}

  departmentArry = [];
  isError: boolean = false;

  ngOnInit(): void {
    
  }

  fetchAllDepartments(){
    const department = this.departmentService.getAllDepartments().subscribe({
      next: (depRes)=>{
        if(depRes['status'] == 'success'){
          this.departmentArry = depRes['data']['results'];
        }else {
          this.isError = true
        }
      },
      error: (error)=>{
        
      }
    })
  }

}
