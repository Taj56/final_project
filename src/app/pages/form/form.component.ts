import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  constructor(private reportService: ReportService, private router: Router){}

  formArray: any = [];

  ngOnInit(): void {
    
  }

  addReport(incidentForm: NgForm){
    const report = this.reportService.createReport(incidentForm.value).subscribe({
      next: (reportRes)=>{
        if(reportRes['status'] == 'success'){
          this.router.navigateByUrl(`/view-report/${reportRes['recordID']}`)
        }
      }
    })
  }

}
