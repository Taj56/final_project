import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-all-incident',
  templateUrl: './all-incident.component.html',
  styleUrls: ['./all-incident.component.css']
})
export class AllIncidentComponent implements OnInit{

  constructor(private reportService: ReportService, private router: Router){}

  reportsArry = [];
  isError: boolean = false;

  ngOnInit(): void {
    this.allReport();
  }

  allReport(){
    const report = this.reportService.getAllReports().subscribe((res)=>{
      if(res['status'] == 'success'){
        this.reportsArry = res['data']['reports'];
      }else {
        this.isError = true;
      }
    })
  }



}
