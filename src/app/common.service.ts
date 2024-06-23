import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(  public http:HttpClient) { }
  getdata(){
    return this.http.get<any>("../assets/snap.json")
  }
  getTransactionDetails(start:any,end:any,sari:any,eari:any){

   // return this.http.get(`https://snapshotapi-t4.travelclick.com/v1/snapshot/landingpage/hotelCode/2179/${start.toLocaleDateString()}/${end.toLocaleDateString()}/0/0`)
     return this.http.get("https://snapshotapi-t4.travelclick.com/v1/snapshot/landingpage/hotelCode/2179"+start+"/"+end+"/"+sari+"/"+eari)
   
  }
 
}
