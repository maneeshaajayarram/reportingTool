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

  modifiedTableData:any;
  tableData:any


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
  
  sendInput() {
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
  
  getNewTable(channelsdetails:any){
    this.modifiedTableData= [];
    let modifiedArr= channelsdetails.map((channelDetails:any)=>{
        let modifiedObj= {
          "channelName": channelDetails.channelDetails.channelName,
          "totalAriTxn": channelDetails.totalAriTxn,
          "percentageOfSuccessTxn": channelDetails.percentageOfSuccessTxn,
          "percentageOfTechFailureTxn": channelDetails.percentageOfTechFailureTxn,
          "percentageOfConfigErrorTxn": channelDetails.percentageOfConfigErrorTxn,
          "percentageOfUpdateWarningTxn": channelDetails.percentageOfUpdateWarningTxn,
        }
        this.modifiedTableData.push(modifiedObj)
      return channelDetails
    })
  }
 
  getTable(){
      this.commonservice.getTableDetails().subscribe((res: any)=>{
        this.tableData= res
        console.log(this.tableData.landingPageTableResults.tableDetails)
        this.getNewTable(this.tableData.landingPageTableResults.tableDetails);
      })
  }
  
  
}



