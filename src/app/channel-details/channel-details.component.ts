import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-channel-details',
  templateUrl: './channel-details.component.html',
  styleUrl: './channel-details.component.scss',
})
export class ChannelDetailsComponent implements OnInit {
  channelName: any;
  snapData: any;
  timeZoneInfo: any;

  startDate: any;
  endDate: any;

  submitStartDate: any;
  submitEndDate: any;

  ARIStartDate: any;
  ARIEndDate: any;

  isVisible: any = false;

  resultDescriptionData: any=[];
  TransactionResultData:any=[];
  newTransactionResultData:any=[];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getChannelName();
    this.commonService.getdata().subscribe((data: any) => {
      this.snapData = data;
      this.timeZoneInfo = data.timezoneInfo['timeZoneList'];
    });
    this.commonService.getResultDescriptionData().subscribe((res:any) => {
      this.resultDescriptionData.push(res['transactionResults']);  
      this.resultDescriptionData.map((obj:any)=>{
        return  this.TransactionResultData.push(
          obj['technicalFailedTxn'],
          obj['successTxn'],
          obj['updateWarningTxn'],
          obj['configErrorTxn'])
      })
    });    
    this.setTransactionResultData();
  }

  getChannelName() {
    this.commonService.getChannelName().subscribe((res) => {
      this.channelName = res;
    });
  }
  sendDates(ndays: any) {
    this.endDate = new Date().toLocaleDateString('en-ZA');
    this.startDate = new Date().setDate(new Date().getDate() - ndays);
    this.startDate = new Date(this.startDate).toLocaleDateString('en-ZA');
    this.submitStartDate = this.startDate.replace(/\//g, '-');
    this.submitEndDate = this.endDate.replace(/\//g, '-');
  }

  showAdvanceFilters() {
    this.isVisible = !this.isVisible;
  }
 
  setTransactionResultData(){
    let eachTransactionResult: any;
    let count= 0;
    this.TransactionResultData.map((obj:any)=>{
       obj.transactions.map((nestedObj:any)=>{
        eachTransactionResult= {
          "Id": count,
          "category": obj.category,
          "cmResponseCode": nestedObj.cmResponseCode,
          "count": nestedObj.count,
          "transactionDescription": nestedObj.transactionDescription
        }
        count= count+1;
        this.newTransactionResultData.push(eachTransactionResult);
        return nestedObj;
      })
      return obj;
    })
    
  }

}
