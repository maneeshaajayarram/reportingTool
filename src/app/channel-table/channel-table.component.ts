import { Component , Input, OnChanges, SimpleChanges,OnInit } from '@angular/core';
import { CommonService  } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-channel-table',
  templateUrl: './channel-table.component.html',
  styleUrl: './channel-table.component.scss'
})
export class ChannelTableComponent implements OnChanges {
  
  propertyName:any= 'channelName';
  order:any= 'asc';
  orginalNewTableData:any;
  o:any
  @Input() newTableData:any;
  
  constructor( 
   private commonservice : CommonService,
   private router: Router,
   private route: ActivatedRoute
   ){}
   
   

   ngOnChanges( changes:SimpleChanges): any{
    if(changes['newTableData'].currentValue)
    {
      this.orginalNewTableData= changes['newTableData'].currentValue;
      console.log(this.orginalNewTableData,'onchanges')
      this.o= this.newTableData.map((x:any) =>{
        return x;
      })
    }
  }
  sendChannelName(channelName:any){
    if( channelName != "Transactions aggregate"){
      this.commonservice.setChannelName(channelName);
      this.router.navigate(['/channeldetails'])
    }
  }
  sort(property:any){
    debugger
    this.propertyName= property;
    if(this.order== 'asc'){
      this.order= 'dsc';
    }
    else if(this.order== 'dsc'){
      this.order= 'emp'
    }
    else if(this.order = 'emp') {
      this.order= 'asc'
    }
  }
  
}
