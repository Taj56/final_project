import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit{

  constructor(private reportService: ReportService, private route: ActivatedRoute, private router: Router){}

  @ViewChild('reportData') reportData!: ElementRef;

  // reportArray = [];
  id: number = 0;
  reports: any;
  isError: boolean = false;
  hasResults: boolean = false;

  ngOnInit(): void {
    this.getSingleReport();

    // setTimeout(()=>{
    //   this.generatePdf();
    // },5000)

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

  generatePdf():void{
    try {
      
      let pdfDoc = new jsPDF();
      const title = document.getElementsByClassName('title');
      const header = document.getElementsByClassName('report-header');

      

      autoTable(pdfDoc, {
        html: '#reportData',
        startY: 40,
        useCss: true
        
      });

      pdfDoc.setProperties({
        title: "Incident Report"
      });

      pdfDoc.text(title[0].innerHTML, 80, 10);
      pdfDoc.text(header[0].innerHTML, 75, 20);
      // pdfDoc.addImage('assets/crest.png', "PNG", 10, 10, 30, 30);
      window.open(pdfDoc.output('bloburl'));
      // pdfDoc.save()

    } catch (error) {
      console.log(error);
    }
  }

}
