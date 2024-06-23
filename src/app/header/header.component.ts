import { ChangeDetectorRef, Component, NgModule, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';

CommonService;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  data: any;
  startDate: any;
  endDate: any;

  inputStart: any = '';
  inputEnd: any = '';

  ARIstart: any = '';
  ARIend: any = '';

  constructor(private commonservice: CommonService, private cdr:ChangeDetectorRef) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.commonservice.getdata().subscribe((res) => {
      this.data = res;
    });
  }

  _getTransactionDetails(start: any, end: any, sari: any, eari: any) {
    this.commonservice
      .getTransactionDetails(start, end, sari, eari)
      .subscribe((res) => {
        console.log(res, 'btn');
      });
  }

  sendData(ndays: any) {
    debugger
    this.endDate = new Date();
    this.startDate = new Date();
    this.startDate = this.startDate.setDate(this.startDate.getDate() - ndays);
    let newDate;
    newDate = new Date(this.startDate);

    this.inputStart= newDate.toLocaleDateString('en-ZA').replace(/\//g,'-');
    this.inputEnd= this.endDate.toLocaleDateString('en-ZA').replace(/\//g,'-');
    console.log(this.inputStart,this.inputEnd)
    if (this.ARIstart == '' && this.ARIend == '') {
      this.cdr.detectChanges()
      this._getTransactionDetails(this.inputStart, this.inputEnd, 0, 0);
    } else {
      this._getTransactionDetails(
        newDate.toLocaleDateString('en-ZA').replace(/\//g,'-'),
        this.endDate.toLocaleDateString('en-ZA').replace(/\//g,'-'),
        this.ARIstart,
        this.ARIend
      );
    }

  }
  
  

  // _getInputTransaction(inputStart: any, inputEnd: any, aris: any, arie: any) {
  //   this.commonservice
  //     .getInputTransactionDetails(inputStart, inputEnd, aris, arie)
  //     .subscribe((res) => {
  //       console.log(res, 'input');
  //     });
  // }
 
  sendInput() {
    debugger
    if (this.ARIstart == '' && this.ARIend == '') {
      this._getTransactionDetails(this.inputStart, this.inputEnd, 0, 0);
    } else {
      this._getTransactionDetails(
        this.inputStart,
        this.inputEnd,
        this.ARIstart,
        this.ARIend
      );
    }
  }


}
