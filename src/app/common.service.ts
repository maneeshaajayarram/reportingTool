import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  channelName$ =new BehaviorSubject("")


  constructor(  public http:HttpClient) { }

  getdata(){
    return this.http.get<any>("../assets/snap.json")
  }
  getTransactionDetails(start:any,end:any,sari:any,eari:any){

   // return this.http.get(`https://snapshotapi-t4.travelclick.com/v1/snapshot/landingpage/hotelCode/2179/${start.toLocaleDateString()}/${end.toLocaleDateString()}/0/0`)
     return this.http.get("https://snapshotapi-t4.travelclick.com/v1/snapshot/landingpage/hotelCode/2179"+start+"/"+end+"/"+sari+"/"+eari)
   
  }

  getTableDetails(){
    return this.http.get<any>("../assets/channel-table.json")
  }

  getResultDescriptionData(){
    return this.http.get<any>('../assets/resultDescriptionData.json')
  }
  
  setChannelName(name:any){
     this.channelName$.next(name);
  }

  getChannelName(){
     return this.channelName$;
  }



 

}