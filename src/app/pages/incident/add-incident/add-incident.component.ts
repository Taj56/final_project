import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit{

  constructor(private reportService: ReportService, private router: Router){};

  formArray: any = [];

  @ViewChild('reportData') reportData!: ElementRef;

  ngOnInit(): void {
    
  }

  addReport(incidentForm: NgForm){
    const report = this.reportService.createReport(incidentForm.value).subscribe((res)=>{
      if(res['status'] == 'success'){
        this.router.navigateByUrl(`/view-report/${res['recordID']}`);
      }
    })
  }

  // generatePdf(incidentForm: NgForm):void{
  //   try {

      
  //     let pdfDoc = new jsPDF();
  //     const title = document.getElementsByClassName('title');

  //     pdfDoc.setProperties({
  //       title: 'Incident Report'
  //     });

      

      

  //     pdfDoc.text(title[0].innerHTML, 80, 10);
  //     pdfDoc.text(incidentForm.value, 75, 20);
  //     window.open(pdfDoc.output('bloburl'));

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

}
