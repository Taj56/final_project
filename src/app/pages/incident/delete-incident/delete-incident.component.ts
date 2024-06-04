import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-delete-incident',
  templateUrl: './delete-incident.component.html',
  styleUrls: ['./delete-incident.component.css']
})
export class DeleteIncidentComponent implements OnInit{

  constructor(private reportService: ReportService, private router: Router, private route: ActivatedRoute){}

  id: number = 0;
  reports: any;
  isError: boolean = false;
  hasResults: boolean = false;

  ngOnInit(): void {
    this.getSingleReport();
  }



  getSingleReport(){
    this.id = this.route.snapshot.params['id'];
    const report = this.reportService.singleReoprt(this.id).subscribe((res)=>{
      if(res['status'] == 'success'){
        this.reports = res['data']['report'];
        // console.log(JSON.stringify(this.reportArray))
        this.hasResults = true;
      }else {
        this.isError = true;
      }
    })
  }

  delete(){
    this.id = this.route.snapshot.params['id'];
    const del = this.reportService.deleteReoprt(this.id).subscribe((res)=>{
      if(res['status'] == 'success'){
        this.router.navigateByUrl('/all-reports')
      }
    })
  }

}
