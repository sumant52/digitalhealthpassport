import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadCovidVaccinationReportService } from '../upload-covid-vaccination-report/upload-covid-vaccination-report.service';

@Component({
  selector: 'app-upload-covid-test-report',
  templateUrl: './upload-covid-test-report.component.html',
  styleUrls: ['./upload-covid-test-report.component.css']
})
export class UploadCovidTestReportComponent implements OnInit {

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
 
  private fileName: any;

  formData: any;

  closeResult: any;
  covidReport: any;

  constructor(private covidreportservice: UploadCovidVaccinationReportService,private modalService: NgbModal,private fb: FormBuilder) { }


  selectReport(event: any){
console.log('event',event.target.value);
if(event.target.value == "covidtestreport"){
  this.covidReport = "covid-report";
}
else if(event.target.value == "covidvaccinationreport"){
  this.covidReport = "covid-vaccination";
}

  }

  onFilechange(event: any) {

    const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

             this.formData = new FormData();

            let data = JSON.stringify({
              "report": this.covidReport, 
              "by": "phizer"
            })

            this.formData.append("file", file);
            this.formData.append("holderDHPId","DHP-3151dfee")
            this.formData.append("metaData",data)
        }
  }
  
  upload(privacy: any) {

      console.log('covid_report',this.formData);
      this.covidreportservice.uploadfile(this.formData).subscribe((resp: any) => {
        this.modalService.open(privacy, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log('response',resp);
      })
    }

    logout(){
      localStorage.clear();
    }

    closePolicy(modal: any){
      this.modalService.dismissAll(modal);
      // window.location.reload();
    }

    getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  ngOnInit() {
  }

}
