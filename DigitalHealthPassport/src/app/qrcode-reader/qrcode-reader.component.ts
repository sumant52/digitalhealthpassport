<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
>>>>>>> 1b08cd737094c64b8bd908331e51688a5f906bd7

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.css']
})
export class QrcodeReaderComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======

  scanResult: any='';

  title = 'ANGULARQRSCANNER';

  onCodeResult(result:string)
  {
this.scanResult=result;
console.log('scanresult',this.scanResult);
  }


  ngOnInit() {
  }

}

>>>>>>> 1b08cd737094c64b8bd908331e51688a5f906bd7
