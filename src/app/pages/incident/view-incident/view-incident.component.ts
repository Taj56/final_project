import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-view-incident',
  templateUrl: './view-incident.component.html',
  styleUrls: ['./view-incident.component.css']
})
export class ViewIncidentComponent implements OnInit{

  constructor(private reportService: ReportService, private router: Router, private route: ActivatedRoute){}

  incident: any;
  id: number = 0;
  isError: boolean = false;

  ngOnInit(): void {
    this.fetchReport();
  }

  // fetchSingleReport(){
  //   this.id = this.route.snapshot.params['id'];
  //   const report = this.reportService.singleReoprt(this.id).subscribe({
  //     next: 
  //   })
  // }

  fetchReport(){
    this.id = this.route.snapshot.params['id'];
    const report = this.reportService.singleReoprt(this.id).subscribe((res)=>{
      if(res['status'] == 'success'){
        this.incident = res['data']['report'];
        // console.log(this.incident)
      }else {
        this.isError = true;
      }
    })
  }

}
